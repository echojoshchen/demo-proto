// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var demo_pb = require('./demo_pb.js');

function serialize_DemoContainer(arg) {
  if (!(arg instanceof demo_pb.DemoContainer)) {
    throw new Error('Expected argument of type DemoContainer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DemoContainer(buffer_arg) {
  return demo_pb.DemoContainer.deserializeBinary(new Uint8Array(buffer_arg));
}


var DemoApiService = exports.DemoApiService = {
  doSomething: {
    path: '/DemoApi/DoSomething',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.DemoContainer,
    responseType: demo_pb.DemoContainer,
    requestSerialize: serialize_DemoContainer,
    requestDeserialize: deserialize_DemoContainer,
    responseSerialize: serialize_DemoContainer,
    responseDeserialize: deserialize_DemoContainer,
  },
};

exports.DemoApiClient = grpc.makeGenericClientConstructor(DemoApiService);
