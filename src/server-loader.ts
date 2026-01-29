/**
 * Demo of a server with @grpc/proto-loader.
 */
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';
import { createLightship } from 'lightship';

import { ProtoGrpcType } from "../api/proto-loader/demo";
import { DemoApiServiceHandlers } from "../api/proto-loader/org/demo/v1/DemoApiService";
import { DemoContainer } from "../api/proto-loader/org/demo/v1/DemoContainer";
import { DemoObject } from "../api/proto-loader/org/demo/v1/DemoObject";
import { Info } from "../api/proto-loader/org/demo/v1/Info";
import { MyType } from "../api/proto-loader/org/demo/v1/MyType";
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

class DemoApiImpl implements DemoApiServiceHandlers {
    [name: string]: grpc.UntypedHandleCall;

    DoSomething: grpc.handleUnaryCall<any, any> = async (call, callback) => {
        const container = call.request.container || call.request;
        // Write to database
        const mockDb: {[key: string]: DbEntry} = {};
        container.objects?.forEach((obj: any) => {
            mockDb[obj.info?.id || ""] = serializeDbFormat(obj);
        })

        // Read from database
        const readData: DemoContainer = {
            objects: Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry)),
        };
        callback(null, {container: readData});
    };
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
    const info: Info = {
        id: "1234",
        time: Date.now(),
    };
    const demoObj: DemoObject = {
        info,
        name: "Test Object",
        type: MyType.MY_TYPE_ENABLED,
        count: 100,
    };
    const container: DemoContainer = {
        objects: [demoObj],
    }

    const client = new packageObject.org.demo.v1.DemoApiService("localhost:9876", grpc.credentials.createInsecure());
    const readData = await new Promise<DemoContainer>((resolve) => {
        client.doSomething({container: container}, (err, response) => {
            resolve(response?.container || {} as DemoContainer)
        });
    });

    // Human readable strings
    const MyTypeToString: Record<MyType|string, string | undefined> = {
        [MyType.MY_TYPE_UNSPECIFIED]: undefined,
        [MyType.MY_TYPE_DISABLED]: "Disabled",
        [MyType.MY_TYPE_ENABLED]: "Enabled",
    };
    readData.objects?.forEach((obj, index) => {
        console.log("Object:", index);
        console.log("Info:", obj.info?.id);
        console.log("Time:", obj.info?.time?.toString());
        console.log("Name:", obj.name);
        console.log("Type:", MyTypeToString[obj.type || MyType.MY_TYPE_UNSPECIFIED]);
        console.log("Count:", obj.count);
    });

    if (process.env.SHUTDOWN) {
        server.forceShutdown();
    } else {
        const lightship = await createLightship({
            detectKubernetes: false,
        });
        lightship.signalReady();
    }
});