// Original file: proto/demo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DemoContainer as _org_demo_DemoContainer, DemoContainer__Output as _org_demo_DemoContainer__Output } from '../../org/demo/DemoContainer';

export interface DemoApiClient extends grpc.Client {
  DoSomething(argument: _org_demo_DemoContainer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  DoSomething(argument: _org_demo_DemoContainer, metadata: grpc.Metadata, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  DoSomething(argument: _org_demo_DemoContainer, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  DoSomething(argument: _org_demo_DemoContainer, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_DemoContainer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_DemoContainer, metadata: grpc.Metadata, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_DemoContainer, options: grpc.CallOptions, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  doSomething(argument: _org_demo_DemoContainer, callback: grpc.requestCallback<_org_demo_DemoContainer__Output>): grpc.ClientUnaryCall;
  
}

export interface DemoApiHandlers extends grpc.UntypedServiceImplementation {
  DoSomething: grpc.handleUnaryCall<_org_demo_DemoContainer__Output, _org_demo_DemoContainer>;
  
}

export interface DemoApiDefinition extends grpc.ServiceDefinition {
  DoSomething: MethodDefinition<_org_demo_DemoContainer, _org_demo_DemoContainer, _org_demo_DemoContainer__Output, _org_demo_DemoContainer__Output>
}
