/**
 * Demo of a server with @grpc/proto-loader server and @grpc-js client.
 */
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from "../api/proto-loader/demo";
import { DemoApiHandlers } from "../api/proto-loader/org/demo/DemoApi";
import { DemoContainer } from "../api/proto-loader/org/demo/DemoContainer";
import { DemoObject } from "../api/proto-loader/org/demo/DemoObject";
import { MyType } from "../api/proto-loader/org/demo/MyType";
import * as demoPb from "../api/grpcjs/demo_pb";
import * as demoGrpcPb from "../api/grpcjs/demo_grpc_pb";
import { DbEntry } from "../interfaces/database";
import wrapServerWithReflection from "grpc-node-server-reflection";

function serializeDbFormat(data: DemoObject): DbEntry {
    return {
        infoId: data.info?.id || "",
        infoTime: Number(data.info?.time),
        name: data.name || "",
        type: (MyType as any)[data.type as MyType],
        count: data.count || 0,
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    return {
        info: {
            id: data.infoId,
            time: data.infoTime,
        },
        name: data.name,
        type: (MyType as any)[data.type] as MyType,
        count: data.count,
    };
}

class DemoApiImpl implements DemoApiHandlers {
    [name: string]: grpc.UntypedHandleCall;

    async DoSomething(call: grpc.ServerUnaryCall<DemoContainer, DemoContainer>,
        callback: grpc.sendUnaryData<DemoContainer>): Promise<void> {
        const container = call.request;
        // Write to database
        const mockDb: {[key: string]: DbEntry} = {};
        container.objects?.forEach((obj) => {
            mockDb[obj.info?.id || ""] = serializeDbFormat(obj);
        })

        // Read from database
        const readData: DemoContainer = {
            objects: Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry)),
        };
        callback(null, readData);
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
            packageObject.org.demo.DemoApi.service;

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
    const info = new demoPb.Info();
    info.setId("1234");
    info.setTime(Date.now());
    const demoObj = new demoPb.DemoObject()
    demoObj.setInfo(info);
    demoObj.setName("Test Object");
    demoObj.setType(demoPb.MyType.ENABLED);
    demoObj.setCount(100);
    const container = new demoPb.DemoContainer();
    container.setObjectsList([demoObj]);

    const client = new demoGrpcPb.DemoApiClient("localhost:9876", grpc.credentials.createInsecure());
    const readData = await new Promise<demoPb.DemoContainer>((resolve) => {
        client.doSomething(container, (err, response) => {
            resolve(response)
        });
    });

    // Human readable strings
    const MyTypeToString: Record<demoPb.MyType, string | undefined> = {
        [demoPb.MyType.DEFAULT]: undefined,
        [demoPb.MyType.DISABLED]: "Disabled",
        [demoPb.MyType.ENABLED]: "Enabled",
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