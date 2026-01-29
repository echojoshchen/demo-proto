/**
 * Demo of a server with google-protobuf and @grpc/grpc-js.
 */

import * as grpc from "@grpc/grpc-js";
import { createLightship } from 'lightship';

import {
    DemoContainer, DemoObject, Info, MyType, DoSomethingRequest, DoSomethingResponse
} from "../api/grpcjs/demo_pb";
import {
    DemoApiServiceClient, DemoApiServiceService, IDemoApiServiceServer
} from "../api/grpcjs/demo_grpc_pb";
import { DbEntry } from "../interfaces/database";

// Add reverse mappings for enums
Object.entries(MyType).forEach(([key, value]) => {
    // @ts-ignore
    MyType[value] = key;
})

function serializeDbFormat(data: DemoObject): DbEntry {
    return {
        infoId: data.getInfo()?.getId() || "",
        infoTime: data.getInfo()?.getTime() || 0,
        name: data.getName(),
        type: MyType[data.getType()],
        count: data.getCount(),
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    const info = new Info();
    info.setId(data.infoId);
    info.setTime(data.infoTime);
    const demoObj = new DemoObject()
    demoObj.setInfo(info);
    demoObj.setName(data.name);
    demoObj.setType((MyType as any)[data.type]);
    demoObj.setCount(data.count);
    return demoObj;
}

class DemoApiImpl implements IDemoApiServiceServer {
    [name: string]: grpc.UntypedHandleCall;

    async doSomething(call: grpc.ServerUnaryCall<DoSomethingRequest, DoSomethingResponse>,
        callback: grpc.sendUnaryData<DoSomethingResponse>): Promise<void> {
        const container = call.request.getContainer() || new DemoContainer();
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
        const response = new DoSomethingResponse();
        response.setContainer(readData);
        callback(null, response);
    }
}

export default async function initServer(port: number): Promise<any> {
    return new Promise((resolve, reject) => {
        const server = new grpc.Server();

        server.addService(DemoApiServiceService, new DemoApiImpl());
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
    const demoObj = new DemoObject()
    demoObj.setInfo(info);
    demoObj.setName("Test Object");
    demoObj.setType(MyType.MY_TYPE_ENABLED);
    demoObj.setCount(100);
    const container = new DemoContainer();
    container.setObjectsList([demoObj]);

    const client = new DemoApiServiceClient("localhost:9876", grpc.credentials.createInsecure());
    const readData = await new Promise<DemoContainer>((resolve) => {
        const request = new DoSomethingRequest();
        request.setContainer(container);
        client.doSomething(request, (err, response) => {
            if (response && response.hasContainer()) {
                resolve(response.getContainer()!)
            } else {
                resolve(new DemoContainer())
            }
        });
    });

    // Human readable strings
    const MyTypeToString: Record<MyType, string | undefined> = {
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

    if (process.env.SHUTDOWN) {
        server.forceShutdown();
    } else {
        const lightship = await createLightship({
            detectKubernetes: false,
        });
        lightship.signalReady();
        console.log('ready');
    }
});