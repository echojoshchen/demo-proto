import { ConnectRouter } from "@connectrpc/connect";
import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import { DemoApiService, DoSomethingRequest } from "../api/buf/demo_pb.js";

// Define routes inline
const routes = (router: ConnectRouter) => {
  // registers org.demo.v1.DemoApiService
  router.service(DemoApiService, {
    // implements rpc DoSomething
    async doSomething(req: DoSomethingRequest) {
      // Process the container and return it
      const container = req.container;
      
      // Example processing: you can modify the container here
      // For now, just return it as-is
      return { container };
    },
  });
};

async function main() {
  const server = fastify();
  
  // Register the Connect plugin
  await server.register(fastifyConnectPlugin, {
    routes: routes,
  });
  
  try {
    await server.listen({ port: 3000 });
    console.log("Server is listening on port 3000");
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

main().catch(console.error);
