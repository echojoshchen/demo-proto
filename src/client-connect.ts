import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { create } from "@bufbuild/protobuf";
import { DemoApiService, DemoContainerSchema, DemoObjectSchema, InfoSchema, MyType } from "../api/buf/demo_pb.js";

// Create a transport
const transport = createConnectTransport({
  baseUrl: "http://localhost:3000",
  httpVersion: "1.1",
});

// Create a client
const client = createClient(DemoApiService, transport);

async function testClient() {
  try {
    // Create a test container
    const info = create(InfoSchema, {
      id: "test-id-123",
      time: BigInt(Date.now()) * BigInt(1000000), // Convert to nanoseconds
    });

    const demoObject = create(DemoObjectSchema, {
      info,
      name: "Test Object",
      type: MyType.ENABLED,
      count: 42,
      longFieldName: "This is a long field name",
    });

    const container = create(DemoContainerSchema, {
      objects: [demoObject],
    });

    // Make the RPC call
    const response = await client.doSomething({ container });
    
    console.log("Response:", response);
    console.log("Number of objects in response:", response.container?.objects.length || 0);
  } catch (error) {
    console.error("Error calling DoSomething:", error);
  }
}

// Run the test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testClient();
}

export { client, testClient };
