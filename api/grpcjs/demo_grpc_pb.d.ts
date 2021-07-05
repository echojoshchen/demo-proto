// package: 
// file: demo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as demo_pb from "./demo_pb";

interface IDemoApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    doSomething: IDemoApiService_IDoSomething;
}

interface IDemoApiService_IDoSomething extends grpc.MethodDefinition<demo_pb.DemoContainer, demo_pb.DemoContainer> {
    path: "/DemoApi/DoSomething";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<demo_pb.DemoContainer>;
    requestDeserialize: grpc.deserialize<demo_pb.DemoContainer>;
    responseSerialize: grpc.serialize<demo_pb.DemoContainer>;
    responseDeserialize: grpc.deserialize<demo_pb.DemoContainer>;
}

export const DemoApiService: IDemoApiService;

export interface IDemoApiServer extends grpc.UntypedServiceImplementation {
    doSomething: grpc.handleUnaryCall<demo_pb.DemoContainer, demo_pb.DemoContainer>;
}

export interface IDemoApiClient {
    doSomething(request: demo_pb.DemoContainer, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoContainer) => void): grpc.ClientUnaryCall;
    doSomething(request: demo_pb.DemoContainer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoContainer) => void): grpc.ClientUnaryCall;
    doSomething(request: demo_pb.DemoContainer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoContainer) => void): grpc.ClientUnaryCall;
}

export class DemoApiClient extends grpc.Client implements IDemoApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public doSomething(request: demo_pb.DemoContainer, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoContainer) => void): grpc.ClientUnaryCall;
    public doSomething(request: demo_pb.DemoContainer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoContainer) => void): grpc.ClientUnaryCall;
    public doSomething(request: demo_pb.DemoContainer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoContainer) => void): grpc.ClientUnaryCall;
}
