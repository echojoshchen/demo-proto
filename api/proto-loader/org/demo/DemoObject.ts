// Original file: proto/demo.proto

import type { Info as _org_demo_Info, Info__Output as _org_demo_Info__Output } from '../../org/demo/Info';
import type { MyType as _org_demo_MyType, MyType__Output as _org_demo_MyType__Output } from '../../org/demo/MyType';

export interface DemoObject {
  'info'?: (_org_demo_Info | null);
  'name'?: (string);
  'type'?: (_org_demo_MyType);
  'count'?: (number);
  'longFieldName'?: (string);
}

export interface DemoObject__Output {
  'info'?: (_org_demo_Info__Output);
  'name'?: (string);
  'type'?: (_org_demo_MyType__Output);
  'count'?: (number);
  'longFieldName'?: (string);
}
