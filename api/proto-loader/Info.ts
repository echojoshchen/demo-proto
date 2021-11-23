// Original file: proto/demo.proto

import type { Long } from '@grpc/proto-loader';

export interface Info {
  'id'?: (string);
  'time'?: (number | string | Long);
}

export interface Info__Output {
  'id'?: (string);
  'time'?: (number);
}
