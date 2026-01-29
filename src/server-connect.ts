import { ConnectRouter } from "@connectrpc/connect";
import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect.js";

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
