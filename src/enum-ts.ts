/**
 * Demo of serializing an enum to strings.
 */

import { MyType } from "../interfaces/api";

// Single enum to string and back
let val = MyType.ENABLED;
const valString = MyType[val];
val = (MyType as any)[valString];

// Enum to list of strings
const stringList = Object.values(MyType).filter((val) => typeof val === "string");
console.log("Enum as list of strings", stringList);

// Enum to human readable string
const MyTypeToString: Record<MyType, string | undefined> = {
    [MyType.DEFAULT]: undefined,
    [MyType.DISABLED]: "Disabled",
    [MyType.ENABLED]: "Enabled",
};
const humanString = MyTypeToString[val];
console.log("Human string", humanString)

// Bonus: TypeScript can use a string enum
// Typescript can define enums with strings, eliminates step to convert from enum to readable string
export enum MyStringType {
    DEFAULT = "Default",
    ENABLED = "Enabled",
    DISABLED = "Disabled",
}
const easyHumanString = MyStringType.ENABLED;
console.log("Easy human string", easyHumanString)
