import * as grpc from "@grpc/grpc-js";
import { DemoApiServiceClient } from "../api/grpcjs/demo_grpc_pb";
import {
    DemoContainer, DemoObject, Info, MyType, DoSomethingRequest, DoSomethingResponse
} from "../api/grpcjs/demo_pb";

// Create a gRPC client
const client = new DemoApiServiceClient(
    "localhost:5001",
    grpc.credentials.createInsecure()
);

async function testClient() {
    return new Promise<void>((resolve, reject) => {
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

        const request = new DoSomethingRequest();
        request.setContainer(container);

        console.log("Sending request to server...");
        
        // Make the RPC call
        client.doSomething(request, (err, response: DoSomethingResponse | null) => {
            if (err) {
                console.error("Error calling DoSomething:", err);
                reject(err);
                return;
            }

            if (!response) {
                console.error("No response received");
                reject(new Error("No response received"));
                return;
            }

            console.log("Response received successfully!");
            
            // Human readable strings
            const MyTypeToString: Record<MyType, string | undefined> = {
                [MyType.MY_TYPE_UNSPECIFIED]: undefined,
                [MyType.MY_TYPE_DISABLED]: "Disabled",
                [MyType.MY_TYPE_ENABLED]: "Enabled",
            };

            const responseContainer = response.getContainer();
            if (responseContainer) {
                responseContainer.getObjectsList().forEach((obj, index) => {
                    console.log(`\nObject ${index}:`);
                    console.log(`  Info ID: ${obj.getInfo()?.getId()}`);
                    console.log(`  Info Time: ${obj.getInfo()?.getTime()}`);
                    console.log(`  Name: ${obj.getName()}`);
                    console.log(`  Type: ${MyTypeToString[obj.getType()]}`);
                    console.log(`  Count: ${obj.getCount()}`);
                });
            }
            
            resolve();
        });
    });
}

// Run the test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    testClient()
        .then(() => {
            console.log("\nClient test completed successfully!");
            process.exit(0);
        })
        .catch((err) => {
            console.error("\nClient test failed:", err);
            process.exit(1);
        });
}

export { client, testClient };
