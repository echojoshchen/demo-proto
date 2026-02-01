/**
 * Demo of a server with protobufjs and @grpc/grpc-js.
 */

import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { createLightship } from 'lightship';
import { DbEntry } from "../interfaces/database";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the proto file using proto-loader
const protoPath = `${__dirname}/../../proto/demo.proto`;
const packageDefinition = protoLoader.loadSync(protoPath, {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
const demoService = protoDescriptor.org.demo.DemoApi.service;

// Get message types from the loaded package
const { DemoContainer, DemoObject, Info, MyType } = protoDescriptor.org.demo;

// Helper functions
function serializeDbFormat(data: any): DbEntry {
    return {
        infoId: data.info?.id || "",
        infoTime: Number(data.info?.time) || 0,
        name: data.name || "",
        type: data.type || "MY_TYPE_UNSPECIFIED",
        count: data.count || 0,
    }
}

function deserializeDbFormat(data: DbEntry): any {
    return {
        info: {
            id: data.infoId,
            time: data.infoTime,
        },
        name: data.name,
        type: data.type,
        count: data.count,
    };
}

class DemoApiImpl {
    [name: string]: grpc.UntypedHandleCall;

    async doSomething(call: grpc.ServerUnaryCall<any, any>,
        callback: grpc.sendUnaryData<any>): Promise<void> {
        try {
            // The request is already deserialized by grpc-js
            const container = call.request.container || call.request;
            
            // Write to database
            const mockDb: {[key: string]: DbEntry} = {};
            if (container.objects) {
                container.objects.forEach((obj: any) => {
                    mockDb[obj.info?.id || ""] = serializeDbFormat(obj);
                });
            }

            // Read from database
            const readData = {
                objects: Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry)),
            };

            // Send response
            callback(null, { container: readData });
        } catch (error) {
            console.error('Error in doSomething:', error);
            callback({
                code: grpc.status.INTERNAL,
                details: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}

export default async function initServer(port: number): Promise<any> {
    return new Promise((resolve, reject) => {
        const server = new grpc.Server();

        server.addService(demoService, new DemoApiImpl());
        server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, listenPort) => {
            if (err) {
                reject(err);
            }
            console.log(`gRPC Server (protobufjs) started, listening: 0.0.0.0:${listenPort}`);
            server.start();
            resolve(server);
        });
    });
}

// Test the server
initServer(9877).then(async (server: grpc.Server) => {
    // Create test data
    const info = {
        id: "1234",
        time: Date.now(),
    };
    
    const demoObj = {
        info,
        name: "Test Object",
        type: "MY_TYPE_ENABLED",
        count: 100,
    };
    
    const container = {
        objects: [demoObj],
    };

    // Create client for testing
    const client = new protoDescriptor.org.demo.DemoApi(
        'localhost:9877',
        grpc.credentials.createInsecure()
    );

    const readData = await new Promise<any>((resolve) => {
        client.doSomething({ container: container }, (err: any, response: any) => {
            if (err) {
                console.error('Client error:', err);
                resolve(null);
            } else {
                resolve(response?.container || {});
            }
        });
    });

    // Display results
    const MyTypeToString: Record<string, string | undefined> = {
        "MY_TYPE_UNSPECIFIED": undefined,
        "MY_TYPE_DISABLED": "Disabled",
        "MY_TYPE_ENABLED": "Enabled",
    };

    if (readData.objects) {
        readData.objects.forEach((obj: any, index: number) => {
            console.log(`\nObject ${index}:`);
            console.log(`  Info ID: ${obj.info?.id}`);
            console.log(`  Info Time: ${obj.info?.time}`);
            console.log(`  Name: ${obj.name}`);
            console.log(`  Type: ${MyTypeToString[obj.type || "MY_TYPE_UNSPECIFIED"]}`);
            console.log(`  Count: ${obj.count}`);
        });
    }

    if (process.env.SHUTDOWN) {
        server.forceShutdown();
    } else {
        const lightship = await createLightship({
            detectKubernetes: false,
        });
        lightship.signalReady();
        console.log('ready');
    }
}).catch(console.error);
