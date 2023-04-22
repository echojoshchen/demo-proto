/**
 * Demo of writing and reading objects from a database with Protobuf.js.
 */

import { org } from "../api/pbjs/demo";
import { DbEntry } from "../interfaces/database";
type IDemoObject = org.demo.IDemoObject;

function serializeDbFormat(data: IDemoObject): DbEntry {
    return {
        infoId: data.info?.id || "",
        infoTime: Number(data.info?.time),
        name: data.name || "",
        type: org.demo.MyType[data.type || 0],
        count: data.count || 0,
    }
}

function deserializeDbFormat(data: DbEntry): org.demo.DemoObject {
    return org.demo.DemoObject.fromObject({
        info: {
            id: data.infoId,
            time: data.infoTime,
        },
        name: data.name,
        type: (org.demo.MyType as any)[data.type] as org.demo.MyType,
        count: data.count,
    });
}

// Set data fields
const info = org.demo.Info.fromObject({
    id: "1234",
    time: Date.now(),
});
const demoObj = org.demo.DemoObject.fromObject({
    info,
    name: "Test Object",
    type: org.demo.MyType.ENABLED,
    count: 100,
});
const container = org.demo.DemoContainer.fromObject({
    objects: [demoObj],
});

// Write to database
const mockDb: {[key: string]: DbEntry} = {};
container.objects.forEach((obj) => {
    mockDb[obj.info?.id || ""] = serializeDbFormat(obj);
})

// Read from database
const readData = Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry));

// Present to user

// Human readable strings
const MyTypeToString: Record<org.demo.MyType, string | undefined> = {
    [org.demo.MyType.DEFAULT]: undefined,
    [org.demo.MyType.DISABLED]: "Disabled",
    [org.demo.MyType.ENABLED]: "Enabled",
};
readData.forEach((obj, index) => {
    console.log("Object:", index);
    console.log("Info:", obj.info?.id);
    console.log("Time:", obj.info?.time?.toString());
    console.log("Name:", obj.name);
    console.log("Type:", MyTypeToString[obj.type]);
    console.log("Count:", obj.count);
});
