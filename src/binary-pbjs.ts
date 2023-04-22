/**
 * Demo of writing and reading objects to binary format with Protobuf.js.
 */

import demoProto from "../api/pbjs/demo";
const proto = demoProto.org.demo

// Set data fields
const info = proto.Info.fromObject({
    id: "1234",
    time: Date.now(),
});
const demoObj = proto.DemoObject.fromObject({
    info,
    name: "Test Object",
    type: proto.MyType.ENABLED,
    count: 100,
});
const container = proto.DemoContainer.fromObject({
    objects: [demoObj],
});

// Write to binary
const raw = proto.DemoContainer.encode(container).finish();

// Read from database
const readData = proto.DemoContainer.decode(raw);

// Present to user
console.log(JSON.stringify(readData.toJSON(), null, 2));