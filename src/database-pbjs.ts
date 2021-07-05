/**
 * Demo of writing and reading objects from a database with Protobuf.js.
 */

// Import contains "google-protobuf", which uses eval()
import {
    DemoContainer, DemoObject, IDemoObject, Info, MyType
} from "../api/pbjs/demo";
import { DbEntry } from "./dbInterface";


function serializeDbFormat(data: IDemoObject): DbEntry {
    return {
        infoId: data.info?.id || "",
        infoTime: Number(data.info?.time),
        name: data.name || "",
        type: MyType[data.type || 0],
        count: data.count || 0,
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    return DemoObject.fromObject({
        info: {
            id: data.infoId,
            time: data.infoTime,
        },
        name: data.name,
        type: (MyType as any)[data.type] as MyType,
        count: data.count,
    });
}

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

// Write to database
const mockDb: {[key: string]: DbEntry} = {};
container.objects.forEach((obj) => {
    mockDb[obj.info?.id || ""] = serializeDbFormat(obj);
})

// Read from database
const readData = Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry));

// Present to user

// Human readable strings
const MyTypeToString: Record<MyType, string | undefined> = {
    [MyType.DEFAULT]: undefined,
    [MyType.DISABLED]: "Disabled",
    [MyType.ENABLED]: "Enabled",
};
readData.forEach((obj, index) => {
    console.log("Object:", index);
    console.log("Info:", obj.info?.id);
    console.log("Time:", obj.info?.time.toString());
    console.log("Name:", obj.name);
    console.log("Type:", MyTypeToString[obj.type]);
    console.log("Count:", obj.count);
});
