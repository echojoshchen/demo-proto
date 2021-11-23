// Original file: proto/demo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DemoContainer as _DemoContainer, DemoContainer__Output as _DemoContainer__Output } from './DemoContainer';

export interface DemoApiClient extends grpc.Client {
  DoSomething(argument: _DemoContainer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  DoSomething(argument: _DemoContainer, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  DoSomething(argument: _DemoContainer, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  DoSomething(argument: _DemoContainer, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  doSomething(argument: _DemoContainer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  doSomething(argument: _DemoContainer, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  doSomething(argument: _DemoContainer, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  doSomething(argument: _DemoContainer, callback: (error?: grpc.ServiceError, result?: _DemoContainer__Output) => void): grpc.ClientUnaryCall;
  
}

export interface DemoApiHandlers extends grpc.UntypedServiceImplementation {
  DoSomething: grpc.handleUnaryCall<_DemoContainer__Output, _DemoContainer>;
  
}

export interface DemoApiDefinition extends grpc.ServiceDefinition {
  DoSomething: MethodDefinition<_DemoContainer, _DemoContainer, _DemoContainer__Output, _DemoContainer__Output>
}
