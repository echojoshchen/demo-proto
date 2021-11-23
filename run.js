/**
 * Demo of serializing an enum to strings.
 */

// Import contains "google-protobuf", which uses eval()
const DemoObject = require("./api/grpcjs/demo_pb").DemoObject;

const payload = Buffer.from("asdf");
console.log(payload.length);
DemoObject.deserializeBinary(payload);



