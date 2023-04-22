import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { DemoApiClient as _org_demo_DemoApiClient, DemoApiDefinition as _org_demo_DemoApiDefinition } from './org/demo/DemoApi';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  org: {
    demo: {
      DemoApi: SubtypeConstructor<typeof grpc.Client, _org_demo_DemoApiClient> & { service: _org_demo_DemoApiDefinition }
      DemoContainer: MessageTypeDefinition
      DemoObject: MessageTypeDefinition
      Info: MessageTypeDefinition
      MyType: EnumTypeDefinition
    }
  }
}

