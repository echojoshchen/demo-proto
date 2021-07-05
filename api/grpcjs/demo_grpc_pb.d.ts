// package: 
// file: demo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as demo_pb from "./demo_pb";

interface IDemoApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    doSomething: IDemoApiService_IDoSomething;
}

interface IDemoApiService_IDoSomething extends grpc.MethodDefinition<demo_pb.DemoObject, demo_pb.DemoObject> {
    path: "/DemoApi/DoSomething";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<demo_pb.DemoObject>;
    requestDeserialize: grpc.deserialize<demo_pb.DemoObject>;
    responseSerialize: grpc.serialize<demo_pb.DemoObject>;
    responseDeserialize: grpc.deserialize<demo_pb.DemoObject>;
}

export const DemoApiService: IDemoApiService;

export interface IDemoApiServer extends grpc.UntypedServiceImplementation {
    doSomething: grpc.handleUnaryCall<demo_pb.DemoObject, demo_pb.DemoObject>;
}

export interface IDemoApiClient {
    doSomething(request: demo_pb.DemoObject, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoObject) => void): grpc.ClientUnaryCall;
    doSomething(request: demo_pb.DemoObject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoObject) => void): grpc.ClientUnaryCall;
    doSomething(request: demo_pb.DemoObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoObject) => void): grpc.ClientUnaryCall;
}

export class DemoApiClient extends grpc.Client implements IDemoApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public doSomething(request: demo_pb.DemoObject, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoObject) => void): grpc.ClientUnaryCall;
    public doSomething(request: demo_pb.DemoObject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoObject) => void): grpc.ClientUnaryCall;
    public doSomething(request: demo_pb.DemoObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.DemoObject) => void): grpc.ClientUnaryCall;
}
