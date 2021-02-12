const demo = require("./gen/js/demo_pb");

const testObj = new demo.DemoObject();
testObj.setName("Test Object");
testObj.setType("demo");
testObj.setCount(100);
console.log(testObj.toObject());

const binary = testObj.serializeBinary();
const hex = Buffer.from(binary).toString('hex');
console.log(hex);