import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { DemoApiServiceClient as _org_demo_v1_DemoApiServiceClient, DemoApiServiceDefinition as _org_demo_v1_DemoApiServiceDefinition } from './org/demo/v1/DemoApiService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  org: {
    demo: {
      v1: {
        DemoApiService: SubtypeConstructor<typeof grpc.Client, _org_demo_v1_DemoApiServiceClient> & { service: _org_demo_v1_DemoApiServiceDefinition }
        DemoContainer: MessageTypeDefinition
        DemoObject: MessageTypeDefinition
        DoSomethingRequest: MessageTypeDefinition
        DoSomethingResponse: MessageTypeDefinition
        Info: MessageTypeDefinition
        MyType: EnumTypeDefinition
      }
    }
  }
}

