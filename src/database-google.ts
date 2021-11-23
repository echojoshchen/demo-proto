/**
 * Demo of writing and reading objects from a database with google-protobuf.
 */

// Import contains "google-protobuf", which uses eval()
import {
    DemoContainer, DemoObject, Info, MyType
} from "../api/grpcjs/demo_pb";
import { DbEntry } from "../interfaces/database";

// Add reverse mappings for enums
Object.entries(MyType).forEach(([key, value]) => {
    // @ts-ignore
    MyType[value] = key;
})

function serializeDbFormat(data: DemoObject): DbEntry {
    return {
        infoId: data.getInfo()?.getId() || "",
        infoTime: data.getInfo()?.getTime() || 0,
        name: data.getName(),
        type: MyType[data.getType()],
        count: data.getCount(),
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    const info = new Info();
    info.setId(data.infoId);
    info.setTime(data.infoTime);
    const demoObj = new DemoObject()
    demoObj.setInfo(info);
    demoObj.setName(data.name);
    demoObj.setType((MyType as any)[data.type]);
    demoObj.setCount(data.count);
    return demoObj;
}

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

// Write to database
const mockDb: {[key: string]: DbEntry} = {};
container.getObjectsList().forEach((obj) => {
    mockDb[obj.getInfo()?.getId() || ""] = serializeDbFormat(obj);
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
    console.log("Info:", obj.getInfo()?.getId());
    console.log("Time:", obj.getInfo()?.getTime());
    console.log("Name:", obj.getName());
    console.log("Type:", MyTypeToString[obj.getType()]);
    console.log("Count:", obj.getCount());
});