// Original file: proto/demo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DoSomethingRequest as _org_demo_v1_DoSomethingRequest, DoSomethingRequest__Output as _org_demo_v1_DoSomethingRequest__Output } from '../../../org/demo/v1/DoSomethingRequest';
import type { DoSomethingResponse as _org_demo_v1_DoSomethingResponse, DoSomethingResponse__Output as _org_demo_v1_DoSomethingResponse__Output } from '../../../org/demo/v1/DoSomethingResponse';

export interface DemoApiServiceClient extends grpc.Client {
  DoSomething(argument: _org_demo_v1_DoSomethingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  DoSomething(argument: _org_demo_v1_DoSomethingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  DoSomething(argument: _org_demo_v1_DoSomethingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  DoSomething(argument: _org_demo_v1_DoSomethingRequest, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_v1_DoSomethingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_v1_DoSomethingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_v1_DoSomethingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_v1_DoSomethingRequest, callback: grpc.requestCallback<_org_demo_v1_DoSomethingResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface DemoApiServiceHandlers extends grpc.UntypedServiceImplementation {
  DoSomething: grpc.handleUnaryCall<_org_demo_v1_DoSomethingRequest__Output, _org_demo_v1_DoSomethingResponse>;
  
}

export interface DemoApiServiceDefinition extends grpc.ServiceDefinition {
  DoSomething: MethodDefinition<_org_demo_v1_DoSomethingRequest, _org_demo_v1_DoSomethingResponse, _org_demo_v1_DoSomethingRequest__Output, _org_demo_v1_DoSomethingResponse__Output>
}
