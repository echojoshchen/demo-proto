/**
 * Demo of serializing an enum to strings.
 */

import { MyType } from "../api/pbjs/demo";

// Single enum to string and back
let val = MyType.ENABLED;
const valString = MyType[val];
val = (MyType as any)[valString];

// Enum to list of strings
const stringList = Object.keys(MyType).filter((key) => typeof key === "string");
console.log("Enum as list of strings", stringList);

// Enum to human readable string
const MyTypeToString: Record<MyType, string | undefined> = {
    [MyType.DEFAULT]: undefined,
    [MyType.DISABLED]: "Disabled",
    [MyType.ENABLED]: "Enabled",
};
const humanString = MyTypeToString[val];
console.log("Human string", humanString)



