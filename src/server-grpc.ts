/**
 * Demo of a server with google-protobuf and grpc.
 */

import * as grpc from "grpc";

import {
    DemoContainer, DemoObject, Info, MyType
} from "../api/grpc/demo_pb";
import {
    DemoApiClient, DemoApiService, IDemoApiServer
} from "../api/grpc/demo_grpc_pb";
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

class DemoApiImpl implements IDemoApiServer {
    [name: string]: grpc.handleCall<any, any>;

    async doSomething(call: grpc.ServerUnaryCall<DemoContainer>,
        callback: grpc.sendUnaryData<DemoContainer>): Promise<void> {
        const container = call.request;
        // Write to database
        const mockDb: {[key: string]: DbEntry} = {};
        container.getObjectsList().forEach((obj) => {
            mockDb[obj.getInfo()?.getId() || ""] = serializeDbFormat(obj);
        })

        // Read from database
        const readData = new DemoContainer();
        readData.setObjectsList(
            Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry))
        );
        callback(null, readData);
    }
}

export default async function initServer(port: number): Promise<any> {
    return new Promise((resolve, reject) => {
        const server = new grpc.Server();

        server.addService(DemoApiService, new DemoApiImpl());
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
    demoObj.setType(MyType.ENABLED);
    demoObj.setCount(100);
    const container = new DemoContainer();
    container.setObjectsList([demoObj]);

    const client = new DemoApiClient("localhost:9876", grpc.credentials.createInsecure());
    const readData = await new Promise<DemoContainer>((resolve) => {
        client.doSomething(container, (err, response) => {
            resolve(response)
        });
    });

    // Human readable strings
    const MyTypeToString: Record<MyType, string | undefined> = {
        [MyType.DEFAULT]: undefined,
        [MyType.DISABLED]: "Disabled",
        [MyType.ENABLED]: "Enabled",
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