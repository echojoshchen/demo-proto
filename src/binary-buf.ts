/**
 * Demo of writing and reading objects to binary format with @bufbuild/protobuf.
 */

import { create, toBinary, fromBinary } from "@bufbuild/protobuf";
import {
    DemoContainerSchema,
    DemoObjectSchema,
    InfoSchema,
    MyType,
} from "../api/buf/demo_pb.js";

// Set data fields
const info = create(InfoSchema, {
    id: "1234",
    time: BigInt(Date.now()) * BigInt(1000000), // Convert to nanoseconds
});

const demoObj = create(DemoObjectSchema, {
    info,
    name: "Test Object",
    type: MyType.ENABLED,
    count: 100,
    longFieldName: "This is a long field name",
});

const container = create(DemoContainerSchema, {
    objects: [demoObj],
});

// Serialize to binary
const raw = toBinary(DemoContainerSchema, container);

// Deserialize
const readData = fromBinary(DemoContainerSchema, raw);

// Present to user
console.log(JSON.stringify(readData, (key, value) => 
    typeof value === 'bigint' ? value.toString() + 'n' : value
, 2));

// Show binary size
console.log(`\nBinary size: ${raw.length} bytes`);
