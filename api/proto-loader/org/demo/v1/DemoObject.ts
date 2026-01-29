// Original file: proto/demo.proto

import type { Info as _org_demo_v1_Info, Info__Output as _org_demo_v1_Info__Output } from '../../../org/demo/v1/Info';
import type { MyType as _org_demo_v1_MyType, MyType__Output as _org_demo_v1_MyType__Output } from '../../../org/demo/v1/MyType';

export interface DemoObject {
  'info'?: (_org_demo_v1_Info | null);
  'name'?: (string);
  'type'?: (_org_demo_v1_MyType);
  'count'?: (number);
  'longFieldName'?: (string);
}

export interface DemoObject__Output {
  'info'?: (_org_demo_v1_Info__Output);
  'name'?: (string);
  'type'?: (_org_demo_v1_MyType__Output);
  'count'?: (number);
  'longFieldName'?: (string);
}
