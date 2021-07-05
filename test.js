const demo = require("./gen/js/demo_pb");
const demoV2 = require("./gen/js/demo_v2_pb");
const demoPbjs = require("./pbjs/demo");

// const testObj = new demoV2.DemoObject();
// const info = new demoV2.Info().setId('asdf');
// testObj.setInfo(info);
// testObj.setName("Test Object");
// testObj.setType("test type");
// testObj.setCount(100);
// console.log(testObj.toObject());

// const binary = testObj.serializeBinary();
// const hex = Buffer.from(binary).toString('hex');
// console.log(hex);

// const newObj = demo.DemoObject.deserializeBinary(Buffer.from(hex, 'hex'));
// console.log(newObj.toObject());
// const newObj2 = demoV2.DemoObject.deserializeBinary(Buffer.from(hex, 'hex'));
// console.log(newObj2.toObject());

///////// PBJS
const DemoObject = demoPbjs.DemoObject;
const demoObj = new DemoObject();
const MyEnum = demoPbjs.MyEnum;
console.log('enum', MyEnum[MyEnum.DEFAULT]);
demoObj.name = "Test Object";
demoObj.type = "test type";
demoObj.count = 100;
console.log(demoObj.toJSON());

const binary2 = DemoObject.encode(demoObj).finish();
const hex2 = Buffer.from(binary2).toString('hex');
console.log(hex2);

const newObj2 = DemoObject.decode(Buffer.from(hex2, 'hex'));
console.log(newObj2.toJSON());

const x = new demoPbjs.DemoContainer({objects: [{name: "test"}]});
console.log(demoPbjs.DemoContainer.verify({objects: [{name: "test"}]}));
console.log(demoPbjs.DemoContainer.verify({objects: [{name: "test", blah: "TEST"}]}));