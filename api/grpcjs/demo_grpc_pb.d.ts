// package: org.demo.v1
// file: demo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as demo_pb from "./demo_pb";

interface IDemoApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    doSomething: IDemoApiServiceService_IDoSomething;
}

interface IDemoApiServiceService_IDoSomething extends grpc.MethodDefinition<demo_pb.DoSomethingRequest, demo_pb.DoSomethingResponse> {
    path: "/org.demo.v1.DemoApiService/DoSomething";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<demo_pb.DoSomethingRequest>;
    requestDeserialize: grpc.deserialize<demo_pb.DoSomethingRequest>;
    responseSerialize: grpc.serialize<demo_pb.DoSomethingResponse>;
    responseDeserialize: grpc.deserialize<demo_pb.DoSomethingResponse>;
}

export const DemoApiServiceService: IDemoApiServiceService;

export interface IDemoApiServiceServer extends grpc.UntypedServiceImplementation {
    doSomething: grpc.handleUnaryCall<demo_pb.DoSomethingRequest, demo_pb.DoSomethingResponse>;
}

export interface IDemoApiServiceClient {
    doSomething(request: demo_pb.DoSomethingRequest, callback: (error: grpc.ServiceError | null, response: demo_pb.DoSomethingResponse) => void): grpc.ClientUnaryCall;
    doSomething(request: demo_pb.DoSomethingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.DoSomethingResponse) => void): grpc.ClientUnaryCall;
    doSomething(request: demo_pb.DoSomethingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.DoSomethingResponse) => void): grpc.ClientUnaryCall;
}

export class DemoApiServiceClient extends grpc.Client implements IDemoApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public doSomething(request: demo_pb.DoSomethingRequest, callback: (error: grpc.ServiceError | null, response: demo_pb.DoSomethingResponse) => void): grpc.ClientUnaryCall;
    public doSomething(request: demo_pb.DoSomethingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.DoSomethingResponse) => void): grpc.ClientUnaryCall;
    public doSomething(request: demo_pb.DoSomethingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.DoSomethingResponse) => void): grpc.ClientUnaryCall;
}
