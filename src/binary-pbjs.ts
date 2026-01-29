/**
 * Demo of writing and reading objects to binary format with Protobuf.js.
 */

import demoProto from "../api/pbjs/demo";
const proto = demoProto.org.demo

// Set data fields
const info = proto.v1.Info.fromObject({
    id: "1234",
    time: Date.now(),
});
const demoObj = proto.v1.DemoObject.fromObject({
    info,
    name: "Test Object",
    type: proto.v1.MyType.MY_TYPE_ENABLED,
    count: 100,
});
const container = proto.v1.DemoContainer.fromObject({
    objects: [demoObj],
});

// Write to binary
const raw = proto.v1.DemoContainer.encode(container).finish();

// Read from database
const readData = proto.v1.DemoContainer.decode(raw);

// Present to user
console.log(JSON.stringify(readData.toJSON(), null, 2));