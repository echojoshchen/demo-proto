/**
 * Demo of writing and reading objects from a database with @bufbuild/protobuf.
 */

import { create } from "@bufbuild/protobuf";
import {
    DemoContainerSchema,
    DemoObjectSchema,
    InfoSchema,
    MyType,
    type DemoContainer,
    type DemoObject,
    type Info
} from "../api/buf/demo_pb.js";
import { DbEntry } from "../interfaces/database";

function serializeDbFormat(data: DemoObject): DbEntry {
    return {
        infoId: data.info?.id || "",
        infoTime: Number(data.info?.time || 0n),
        name: data.name || "",
        type: MyType[data.type || 0],
        count: data.count || 0,
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    const info = create(InfoSchema, {
        id: data.infoId,
        time: BigInt(data.infoTime),
    });
    
    return create(DemoObjectSchema, {
        info,
        name: data.name,
        type: (MyType as any)[data.type] as MyType,
        count: data.count,
    });
}

// Set data fields
const info = create(InfoSchema, {
    id: "1234",
    time: BigInt(Date.now()),
});

const demoObj = create(DemoObjectSchema, {
    info,
    name: "Test Object",
    type: MyType.ENABLED,
    count: 100,
});

const container = create(DemoContainerSchema, {
    objects: [demoObj],
});

// Write to database
const mockDb: {[key: string]: DbEntry} = {};
container.objects?.forEach((obj) => {
    mockDb[obj.info?.id || ""] = serializeDbFormat(obj);
})

// Read from database
const readData = Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry));

// Present to user

// Human readable strings
const MyTypeToString: Record<number, string | undefined> = {
    [MyType.UNSPECIFIED]: undefined,
    [MyType.DISABLED]: "Disabled",
    [MyType.ENABLED]: "Enabled",
};
readData.forEach((obj, index) => {
    console.log("Object:", index);
    console.log("Info:", obj.info?.id);
    console.log("Time:", obj.info?.time?.toString());
    console.log("Name:", obj.name);
    console.log("Type:", MyTypeToString[obj.type || 0]);
    console.log("Count:", obj.count);
});
