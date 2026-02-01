import { ConnectRouter } from "@connectrpc/connect";
import { createServer } from "http2";
import { DemoApiService, DoSomethingRequest, DoSomethingResponse, DoSomethingRequestSchema, DoSomethingResponseSchema } from "../api/buf/demo_pb.js";
import { create, fromBinary, toBinary } from "@bufbuild/protobuf";

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

// Custom gRPC handler
async function handleDoSomethingRequest(data: Buffer): Promise<Buffer> {
  try {
    // Parse the request
    const request = fromBinary(DoSomethingRequestSchema, data);
    console.log(`[${new Date().toISOString()}] Processing DoSomething request`);
    console.log(`Request container has ${request.container?.objects?.length || 0} objects`);
    
    // Process the container and return it
    const container = request.container;
    
    // Create response
    const response = create(DoSomethingResponseSchema, { container });
    
    // Serialize response and convert to Buffer
    console.log(`[${new Date().toISOString()}] Sending response`);
    return Buffer.from(toBinary(DoSomethingResponseSchema, response));
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Error handling request:`, err);
    throw err;
  }
}

async function main() {
  console.log(`[${new Date().toISOString()}] Creating HTTP/2 server...`);
  
  // Create HTTP/2 server
  const server = createServer();
  
  // Handle HTTP/2 streams
  server.on('stream', (stream, headers) => {
    const path = headers[':path'] as string;
    const method = headers[':method'] as string;
    
    console.log(`[${new Date().toISOString()}] HTTP/2 stream:`, {
      method,
      path,
      contentType: headers['content-type'],
    });
    
    // Handle DoSomething RPC
    if (method === 'POST' && path === '/org.demo.v1.DemoApiService/DoSomething') {
      const chunks: Buffer[] = [];
      
      // Debug events
      stream.on('close', () => {
        console.log(`[${new Date().toISOString()}] Stream closed`);
      });
      
      stream.on('finish', () => {
        console.log(`[${new Date().toISOString()}] Stream finished`);
      });
      
      stream.on('drain', () => {
        console.log(`[${new Date().toISOString()}] Stream drained`);
      });
      
      stream.on('data', (chunk) => {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      });
      
      stream.on('end', async () => {
        try {
          const data = Buffer.concat(chunks);
          
          // Skip gRPC message framing (5-byte header)
          const messageData = data.slice(5);
          
          // Parse and handle the request
          const request = fromBinary(DoSomethingRequestSchema, messageData);
          console.log(`[${new Date().toISOString()}] Processing DoSomething request`);
          console.log(`Request container has ${request.container?.objects?.length || 0} objects`);
          
          // Create response
          const response = create(DoSomethingResponseSchema, { container: request.container });
          const responseData = Buffer.from(toBinary(DoSomethingResponseSchema, response));
          
          // Write gRPC response with framing
          const responseFrame = Buffer.alloc(5 + responseData.length);
          responseFrame.writeUInt32BE(responseData.length, 1);
          responseData.copy(responseFrame, 5);
          
          stream.respond({
            ':status': 200,
            'content-type': 'application/grpc+proto',
          });
          
          // Set up trailer handling
          let trailersSent = false;
          
          const sendTrailers = () => {
            if (!trailersSent && !stream.destroyed) {
              trailersSent = true;
              const trailers = {
                'grpc-status': '0', // 0 = OK
                'grpc-message': '',
              };
              
              console.log(`[${new Date().toISOString()}] Sending gRPC trailers:`, trailers);
              try {
                stream.sendTrailers(trailers);
              } catch (err) {
                console.error(`[${new Date().toISOString()}] Error sending trailers:`, err);
              }
            }
          };
          
          // Listen for wantTrailers event - this is the proper time to send trailers
          stream.once('wantTrailers', sendTrailers);
          
          stream.write(responseFrame);
          console.log(`[${new Date().toISOString()}] Response data written, ending stream`);
          
          // End the stream - this will trigger wantTrailers if the client expects them
          stream.end();
        } catch (err) {
          console.error(`[${new Date().toISOString()}] Error:`, err);
          stream.respond({ ':status': 500 });
          stream.end();
        }
      });
      
      stream.on('error', (err) => {
        console.error(`[${new Date().toISOString()}] Stream error:`, err);
      });
    } else {
      // Unknown path
      stream.respond({ ':status': 404 });
      stream.end();
    }
  });
  
  // Handle server errors
  server.on('error', (err) => {
    console.error(`[${new Date().toISOString()}] Server error:`, err);
  });
  
  try {
    server.listen(5001);
    console.log(`\n[${new Date().toISOString()}] HTTP/2 server started successfully!`);
    console.log(`- gRPC: grpcurl --http2-prior-knowledge -plaintext localhost:5001`);
    console.log(`- Example: grpcurl --http2-prior-knowledge -plaintext -proto proto/demo.proto -d '{"container": {"objects": [{"info": {"id": "1234"}, "name": "Test", "type": "MY_TYPE_ENABLED", "count": 100}]}}' localhost:5001 org.demo.v1.DemoApiService/DoSomething`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Failed to start server:`, err);
    process.exit(1);
  }
}

main().catch(console.error);
