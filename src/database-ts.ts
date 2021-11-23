/**
 * Demo of writing and reading objects from a database with TypeScript.
 */

import {
    DemoContainer, DemoObject, Info, MyType
} from "../interfaces/api";
import { DbEntry } from "../interfaces/database";

// Typescript can define enums with strings, eliminates step to convert from enum to readable string
export enum MyStringType {
    DEFAULT = "Default",
    ENABLED = "Enabled",
    DISABLED = "Disabled",
}

function serializeDbFormat(data: DemoObject): DbEntry {
    return {
        infoId: data.info?.id || "",
        infoTime: data.info?.time || 0,
        name: data.name,
        type: MyType[data.type],
        count: data.count,
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    return {
        info: {
            id: data.infoId,
            time: data.infoTime,
        },
        name: data.name,
        type: (MyType as any)[data.type] as MyType,
        count: data.count,
    }
}

// Set data fields
const info: Info = {
    id: "1234",
    time: Date.now(),
};
const demoObj: DemoObject = {
    info,
    name: "Test Object",
    type: MyType.ENABLED,
    count: 100,
};
const container: DemoContainer = {
    objects: [demoObj],
}

// Write to database
const mockDb: {[key: string]: DbEntry} = {};
container.objects.forEach((obj) => {
    mockDb[obj.info?.id] = serializeDbFormat(obj);
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
    console.log("Time:", obj.info?.time);
    console.log("Name:", obj.name);
    console.log("Type:", MyTypeToString[obj.type]);
    console.log("Count:", obj.count);
});
