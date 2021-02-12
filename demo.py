import gen.python.demo_pb2
testObj = gen.python.demo_pb2.DemoObject()
testObj.ParseFromString(bytes.fromhex("0a0b54657374204f626a656374120464656d6f18fa0e"))

print(testObj)