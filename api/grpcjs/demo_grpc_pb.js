// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var demo_pb = require('./demo_pb.js');

function serialize_org_demo_DemoContainer(arg) {
  if (!(arg instanceof demo_pb.DemoContainer)) {
    throw new Error('Expected argument of type org.demo.DemoContainer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_demo_DemoContainer(buffer_arg) {
  return demo_pb.DemoContainer.deserializeBinary(new Uint8Array(buffer_arg));
}


var DemoApiService = exports.DemoApiService = {
  doSomething: {
    path: '/org.demo.DemoApi/DoSomething',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.DemoContainer,
    responseType: demo_pb.DemoContainer,
    requestSerialize: serialize_org_demo_DemoContainer,
    requestDeserialize: deserialize_org_demo_DemoContainer,
    responseSerialize: serialize_org_demo_DemoContainer,
    responseDeserialize: deserialize_org_demo_DemoContainer,
  },
};

exports.DemoApiClient = grpc.makeGenericClientConstructor(DemoApiService);
