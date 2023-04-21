/**
 * Demo of writing and reading objects from a database with google-protobuf.
 */

// Import contains "google-protobuf", which uses eval()
import {
    DemoContainer, DemoObject, Info, MyType
} from "../api/grpcjs/demo_pb";

// Add reverse mappings for enums
Object.entries(MyType).forEach(([key, value]) => {
    // @ts-ignore
    MyType[value] = key;
})

// Set data fields
const info = new Info();
info.setId("1234");
info.setTime(Date.now());
const demoObj = new DemoObject()
demoObj.setInfo(info);
demoObj.setName("Test Object");
demoObj.setType(MyType.ENABLED);
demoObj.setCount(100);
const container = new DemoContainer();
container.setObjectsList([demoObj]);

// Serialize to binary
const raw = container.serializeBinary();

// Deserialize
const readData = DemoContainer.deserializeBinary(raw);

// Present to user
console.log(JSON.stringify(readData.toObject(), null, 2));