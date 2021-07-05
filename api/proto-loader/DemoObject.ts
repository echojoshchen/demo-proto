// Original file: proto/demo.proto

import type { Info as _Info, Info__Output as _Info__Output } from './Info';
import type { MyType as _MyType } from './MyType';

export interface DemoObject {
  'info'?: (_Info | null);
  'name'?: (string);
  'type'?: (_MyType | keyof typeof _MyType);
  'count'?: (number);
}

export interface DemoObject__Output {
  'info'?: (_Info__Output);
  'name'?: (string);
  'type'?: (_MyType);
  'count'?: (number);
}
