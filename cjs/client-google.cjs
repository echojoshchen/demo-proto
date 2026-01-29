/**
 * Demo of a gRPC client using google-protobuf and @grpc/grpc-js in CommonJS.
 */

const grpc = require("@grpc/grpc-js");
const { DemoContainer, DemoObject, Info, MyType } = require("./demo_pb.cjs");
const { DemoApiServiceClient } = require("./demo_grpc_pb.cjs");

function createTestContainer() {
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
    
    return container;
}

async function runClient() {
    console.log("Creating gRPC client with google-protobuf...");
    
    // Create a client
    const client = new DemoApiServiceClient(
        "localhost:3000",
        grpc.credentials.createInsecure()
    );
    
    // Create test container
    const container = createTestContainer();
    
    console.log("Sending DoSomething request...");
    
    return new Promise((resolve, reject) => {
        // Create request object
        const request = require("./demo_pb.cjs").DoSomethingRequest;
        const req = new request();
        req.setContainer(container);
        
        client.doSomething(req, (err, response) => {
            if (err) {
                console.error("RPC error:", err.message);
                reject(err);
                return;
            }
            
            console.log("Response received:");
            console.log(response.toObject());
            
            if (response.hasContainer()) {
                const respContainer = response.getContainer();
                console.log(`\nNumber of objects in response: ${respContainer.getObjectsList().length}`);
                
                // Print details of each object
                respContainer.getObjectsList().forEach((obj, index) => {
                    console.log(`\nObject ${index}:`);
                    console.log(`  Name: ${obj.getName()}`);
                    console.log(`  Count: ${obj.getCount()}`);
                    console.log(`  Type: ${MyType[obj.getType()]}`);
                    
                    if (obj.hasInfo()) {
                        const info = obj.getInfo();
                        console.log(`  Info ID: ${info.getId()}`);
                        console.log(`  Info Time: ${info.getTime()}`);
                    }
                });
            }
            
            resolve(response);
        });
    });
}

// Run the client if this file is executed directly
if (require.main === module) {
    runClient()
        .then(() => {
            console.log("\nClient completed successfully");
            process.exit(0);
        })
        .catch((err) => {
            console.error("\nClient failed:", err);
            process.exit(1);
        });
}

module.exports = {
    createTestContainer,
    runClient
};
