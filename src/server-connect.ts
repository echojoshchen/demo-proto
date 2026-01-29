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
      console.log(`[${new Date().toISOString()}] Processing DoSomething request`);
      console.log(`Request container has ${req.container?.objects?.length || 0} objects`);
      
      // Process the container and return it
      const container = req.container;
      
      // Example processing: you can modify the container here
      // For now, just return it as-is
      console.log(`[${new Date().toISOString()}] Sending response`);
      return { container };
    },
  });
};

async function main() {
  const server = fastify();
  
  // Add request logging to Fastify
  server.addHook('onRequest', async (request, reply) => {
    console.log(`[${new Date().toISOString()}] Fastify onRequest:`, {
      method: request.method,
      url: request.url,
      headers: {
        'content-type': request.headers['content-type'],
        'user-agent': request.headers['user-agent'],
        'grpc-accept-encoding': request.headers['grpc-accept-encoding'],
        'accept': request.headers['accept'],
      }
    });
  });
  
  console.log(`[${new Date().toISOString()}] Registering Connect plugin...`);
  
  // Register the Connect plugin
  await server.register(fastifyConnectPlugin, {
    routes: routes,
  });
  
  console.log(`[${new Date().toISOString()}] Connect plugin registered successfully`);
  
  try {
    await server.listen({ port: 5000 });
    console.log(`[${new Date().toISOString()}] Server is listening on port 5000`);
    console.log(`[${new Date().toISOString()}] Supported protocols: Connect, gRPC, gRPC-Web`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Failed to start server:`, err);
    process.exit(1);
  }
}

main().catch(console.error);
