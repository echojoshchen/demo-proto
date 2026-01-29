// Original file: proto/demo.proto

export const MyType = {
  MY_TYPE_UNSPECIFIED: 0,
  MY_TYPE_ENABLED: 1,
  MY_TYPE_DISABLED: 2,
} as const;

export type MyType =
  | 'MY_TYPE_UNSPECIFIED'
  | 0
  | 'MY_TYPE_ENABLED'
  | 1
  | 'MY_TYPE_DISABLED'
  | 2

export type MyType__Output = typeof MyType[keyof typeof MyType]
