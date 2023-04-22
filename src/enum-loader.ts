/**
 * Demo of serializing an enum to strings.
 */

import { MyType } from "../api/proto-loader/org/demo/MyType";

// Add reverse mappings for enums
Object.entries(MyType).forEach(([key, value]) => {
    // @ts-ignore
    MyType[value] = key;
})

// Single enum to string and back
let val = MyType.ENABLED;
const valString = (MyType as any)[val];
val = (MyType as any)[valString];

// Enum to list of strings
const stringList = Object.values(MyType).filter((val) => typeof val === "string");
console.log("Enum as list of strings", stringList);

// Enum to human readable string
const MyTypeToString: Record<MyType, string | undefined> = {
    [MyType.DEFAULT]: undefined,
    [MyType.DISABLED]: "Disabled",
    [MyType.ENABLED]: "Enabled",
    DEFAULT: undefined,
    DISABLED: "Disabled",
    ENABLED: "Enabled",
};
const humanString = MyTypeToString[val];
console.log("Human string", humanString)
