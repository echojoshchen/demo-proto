// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var demo_pb = require('./demo_pb.js');

function serialize_DemoObject(arg) {
  if (!(arg instanceof demo_pb.DemoObject)) {
    throw new Error('Expected argument of type DemoObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DemoObject(buffer_arg) {
  return demo_pb.DemoObject.deserializeBinary(new Uint8Array(buffer_arg));
}


var DemoApiService = exports.DemoApiService = {
  doSomething: {
    path: '/DemoApi/DoSomething',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.DemoObject,
    responseType: demo_pb.DemoObject,
    requestSerialize: serialize_DemoObject,
    requestDeserialize: deserialize_DemoObject,
    responseSerialize: serialize_DemoObject,
    responseDeserialize: deserialize_DemoObject,
  },
};

exports.DemoApiClient = grpc.makeGenericClientConstructor(DemoApiService);
