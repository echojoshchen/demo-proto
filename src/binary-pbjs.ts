/**
 * Demo of writing and reading objects from a database with Protobuf.js.
 */

// Import contains "google-protobuf", which uses eval()
import {
    DemoContainer, DemoObject, IDemoObject, Info, MyType
} from "../api/pbjs/demo";

// Set data fields
const info = Info.fromObject({
    id: "1234",
    time: Date.now(),
});
const demoObj = DemoObject.fromObject({
    info,
    name: "Test Object",
    type: MyType.ENABLED,
    count: 100,
});
const container = DemoContainer.fromObject({
    objects: [demoObj],
});

// Write to binary
const raw = DemoContainer.encode(container).finish();

// Read from database
const readData = DemoContainer.decode(raw);

// Present to user
console.log(JSON.stringify(readData.toJSON(), null, 2));