// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var demo_pb = require('./demo_pb.js');

function serialize_org_demo_v1_DoSomethingRequest(arg) {
  if (!(arg instanceof demo_pb.DoSomethingRequest)) {
    throw new Error('Expected argument of type org.demo.v1.DoSomethingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_demo_v1_DoSomethingRequest(buffer_arg) {
  return demo_pb.DoSomethingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_demo_v1_DoSomethingResponse(arg) {
  if (!(arg instanceof demo_pb.DoSomethingResponse)) {
    throw new Error('Expected argument of type org.demo.v1.DoSomethingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_demo_v1_DoSomethingResponse(buffer_arg) {
  return demo_pb.DoSomethingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DemoApiServiceService = exports.DemoApiServiceService = {
  doSomething: {
    path: '/org.demo.v1.DemoApiService/DoSomething',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.DoSomethingRequest,
    responseType: demo_pb.DoSomethingResponse,
    requestSerialize: serialize_org_demo_v1_DoSomethingRequest,
    requestDeserialize: deserialize_org_demo_v1_DoSomethingRequest,
    responseSerialize: serialize_org_demo_v1_DoSomethingResponse,
    responseDeserialize: deserialize_org_demo_v1_DoSomethingResponse,
  },
};

exports.DemoApiServiceClient = grpc.makeGenericClientConstructor(DemoApiServiceService);
