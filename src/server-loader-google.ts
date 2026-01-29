/**
 * Demo of a server with @grpc/proto-loader server and @grpc-js client.
 */
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from "../api/proto-loader/demo";
import { DemoApiServiceHandlers } from "../api/proto-loader/org/demo/v1/DemoApiService";
import { DemoContainer, DemoObject, MyType, DoSomethingRequest, Info } from "../api/grpcjs/demo_pb";
import * as demoGrpcPb from "../api/grpcjs/demo_grpc_pb";
import { DbEntry } from "../interfaces/database";
import wrapServerWithReflection from "grpc-node-server-reflection";

function serializeDbFormat(data: DemoObject): DbEntry {
    return {
        infoId: data.getInfo()?.getId() || "",
        infoTime: Number(data.getInfo()?.getTime()),
        name: data.getName() || "",
        type: (MyType as any)[data.getType() as MyType],
        count: data.getCount() || 0,
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    const info = new Info();
    info.setId(data.infoId);
    info.setTime(data.infoTime);
    const demoObj = new DemoObject();
    demoObj.setInfo(info);
    demoObj.setName(data.name);
    demoObj.setType((MyType as any)[data.type] as MyType);
    demoObj.setCount(data.count);
    return demoObj;
}

class DemoApiImpl implements DemoApiServiceHandlers {
    [name: string]: grpc.UntypedHandleCall;

    async DoSomething(call: grpc.ServerUnaryCall<any, any>,
        callback: grpc.sendUnaryData<any>): Promise<void> {
        const container = call.request.container || call.request;
        // Write to database
        const mockDb: {[key: string]: DbEntry} = {};
        container.getObjectsList().forEach((obj: DemoObject) => {
            mockDb[obj.getInfo()?.getId() || ""] = serializeDbFormat(obj);
        })

        // Read from database
        const readData = new DemoContainer();
        readData.setObjectsList(
            Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry))
        );
        callback(null, {container: readData});
    }
}

const packageDef = protoLoader.loadSync(
    `${path.resolve(
    __dirname,
    )}/../proto/demo.proto`,
);
const packageObject = (grpc.loadPackageDefinition(
    packageDef,
) as unknown) as ProtoGrpcType;

export default async function initServer(port: number): Promise<any> {
    return new Promise((resolve, reject) => {
        const demoService =
            packageObject.org.demo.v1.DemoApiService.service;

        // This wraps the instance of gRPC server with the Server Reflection service and returns it.
        const server = wrapServerWithReflection(new grpc.Server());

        server.addService(demoService, new DemoApiImpl());
        server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, listenPort) => {
            if (err) {
                reject(err);
            }
            console.log(`gRPC Server started, listening: 0.0.0.0:${listenPort}`);
            server.start();
            resolve(server);
        });
    });
}

initServer(9876).then(async (server: grpc.Server) => {
    // Set data fields
    const info = new Info();
    info.setId("1234");
    info.setTime(Date.now());
    const demoObj = new DemoObject();
    demoObj.setInfo(info);
    demoObj.setName("Test Object");
    demoObj.setType(MyType.MY_TYPE_ENABLED);
    demoObj.setCount(100);
    const container = new DemoContainer();
    container.setObjectsList([demoObj]);

    const client = new demoGrpcPb.DemoApiServiceClient("localhost:9876", grpc.credentials.createInsecure());
    const readData = await new Promise<DemoContainer>((resolve) => {
        const request = new DoSomethingRequest();
        request.setContainer(container);
        client.doSomething(request, (err, response) => {
            resolve(response.getContainer() || new DemoContainer())
        });
    });

    // Human readable strings
    const MyTypeToString: Record<number, string | undefined> = {
        [MyType.MY_TYPE_UNSPECIFIED]: undefined,
        [MyType.MY_TYPE_DISABLED]: "Disabled",
        [MyType.MY_TYPE_ENABLED]: "Enabled",
    };
    readData.getObjectsList().forEach((obj, index) => {
        console.log("Object:", index);
        console.log("Info:", obj.getInfo()?.getId());
        console.log("Time:", obj.getInfo()?.getTime());
        console.log("Name:", obj.getName());
        console.log("Type:", MyTypeToString[obj.getType()]);
        console.log("Count:", obj.getCount());
    });

    server.forceShutdown();
});