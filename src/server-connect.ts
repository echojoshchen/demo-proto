import http2 from "http2";
import { connectNodeAdapter } from "@connectrpc/connect-node";
import { ConnectRouter } from "@connectrpc/connect";
import { DemoApiService } from "../api/buf/demo_pb.js";

// Define routes
const routes = (router: ConnectRouter) => {
  router.service(DemoApiService, {
    async doSomething(req) {
      // Process the container and return it
      return { container: req.container };
    },
  });
};

async function main() {
  console.log('Creating HTTP/2 server...');
  
  // Create HTTP/2 server with Connect adapter
  const server = http2.createServer(
    connectNodeAdapter({ routes })
  );
  
  server.listen(5001);
  console.log(`\nHTTP/2 server started successfully!`);
  console.log(`- gRPC: grpcurl -plaintext localhost:5001`);
  console.log(`- Example: grpcurl -plaintext -proto proto/demo.proto -d '{"container": {"objects": [{"info": {"id": "1234"}, "name": "Test", "type": "MY_TYPE_ENABLED", "count": 100}]}}' localhost:5001 org.demo.v1.DemoApiService/DoSomething`);
}

main().catch(console.error);
