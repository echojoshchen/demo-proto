import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { DemoApiClient as _DemoApiClient, DemoApiDefinition as _DemoApiDefinition } from './DemoApi';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  DemoApi: SubtypeConstructor<typeof grpc.Client, _DemoApiClient> & { service: _DemoApiDefinition }
  DemoContainer: MessageTypeDefinition
  DemoObject: MessageTypeDefinition
  Info: MessageTypeDefinition
  MyType: EnumTypeDefinition
}

