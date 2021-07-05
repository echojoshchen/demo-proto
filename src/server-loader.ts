/**
 * Demo of a server with @grpc/proto-loader and Protobuf.js.
 */
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from "../api/proto-loader/demo";
import { DemoApiHandlers } from "../api/proto-loader/DemoApi";
import { DemoContainer } from "../api/proto-loader/DemoContainer";
import { DemoObject } from "../api/proto-loader/DemoObject";
import { Info } from "../api/proto-loader/Info";
import { MyType } from "../api/proto-loader/MyType";
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
            packageObject.DemoApi.service;

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
    const info: Info = {
        id: "1234",
        time: Date.now(),
    };
    const demoObj: DemoObject = {
        info,
        name: "Test Object",
        type: MyType.ENABLED,
        count: 100,
    };
    const container: DemoContainer = {
        objects: [demoObj],
    }

    const client = new packageObject.DemoApi("localhost:9876", grpc.credentials.createInsecure());
    const readData = await new Promise<DemoContainer>((resolve) => {
        client.doSomething(container, (err, response) => {
            resolve(response || {} as DemoContainer)
        });
    });

    // Human readable strings
    const MyTypeToString: Record<MyType|string, string | undefined> = {
        [MyType.DEFAULT]: undefined,
        [MyType.DISABLED]: "Disabled",
        [MyType.ENABLED]: "Enabled",
    };
    readData.objects?.forEach((obj, index) => {
        console.log("Object:", index);
        console.log("Info:", obj.info?.id);
        console.log("Time:", obj.info?.time?.toString());
        console.log("Name:", obj.name);
        console.log("Type:", MyTypeToString[obj.type || MyType.DEFAULT]);
        console.log("Count:", obj.count);
    });

    // Remove this line to leave the server open
    server.forceShutdown();
});