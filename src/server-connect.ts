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
          console.log(`[${new Date().toISOString()}] Received ${data.length} bytes of data`);
          
          // Parse gRPC message framing
          // gRPC message format: [1-byte compression][4-byte length][message]
          if (data.length < 5) {
            throw new Error('Invalid gRPC message: too short');
          }
          
          const compressionFlag = data.readUInt8(0);
          const messageLength = data.readUInt32BE(1);
          
          if (data.length < 5 + messageLength) {
            throw new Error(`Invalid gRPC message: expected ${5 + messageLength} bytes, got ${data.length}`);
          }
          
          const messageData = data.slice(5, 5 + messageLength);
          
          console.log(`[${new Date().toISOString()}] gRPC frame: compression=${compressionFlag}, length=${messageLength}`);
          
          // Parse and handle the request
          const request = fromBinary(DoSomethingRequestSchema, messageData);
          console.log(`[${new Date().toISOString()}] Processing DoSomething request`);
          console.log(`Request container has ${request.container?.objects?.length || 0} objects`);
          
          // Create response
          const response = create(DoSomethingResponseSchema, { container: request.container });
          const responseData = Buffer.from(toBinary(DoSomethingResponseSchema, response));
          
          // Write gRPC response with proper framing
          // gRPC message format: [1-byte compression][4-byte length][message]
          const responseFrame = Buffer.alloc(5 + responseData.length);
          responseFrame.writeUInt8(0, 0); // Compression flag: 0 = uncompressed
          responseFrame.writeUInt32BE(responseData.length, 1); // Message length
          responseData.copy(responseFrame, 5); // Message data
          
          // Send response headers with waitForTrailers option
          stream.respond({
            ':status': 200,
            'content-type': 'application/grpc+proto',
          }, { waitForTrailers: true });
          
          // Write response and wait for it to drain
          const writeResult = stream.write(responseFrame);
          console.log(`[${new Date().toISOString()}] Response data written, drain needed: ${!writeResult}`);
          
          if (!writeResult) {
            await new Promise<void>((resolve) => stream.once('drain', resolve));
          }
          
          // Now end the stream - this will trigger wantTrailers
          stream.end();
          console.log(`[${new Date().toISOString()}] Stream ended`);
          
          // Set up trailer handling
          const trailers = {
            'grpc-status': '0', // 0 = OK
            'grpc-message': '',
          };
          
          // Wait for wantTrailers event
          await new Promise<void>((resolve) => {
            stream.once('wantTrailers', () => {
              console.log(`[${new Date().toISOString()}] Sending gRPC trailers:`, trailers);
              stream.sendTrailers(trailers);
              resolve();
            });
          });
          
          console.log(`[${new Date().toISOString()}] Response completed successfully`);
        } catch (err) {
          console.error(`[${new Date().toISOString()}] Error:`, err);
          
          // Send error response
          if (!stream.destroyed) {
            stream.respond({ ':status': 500 });
            const errorTrailers = {
              'grpc-status': '2', // 2 = Unknown
              'grpc-message': err instanceof Error ? err.message : 'Unknown error',
            };
            stream.sendTrailers(errorTrailers);
          }
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
