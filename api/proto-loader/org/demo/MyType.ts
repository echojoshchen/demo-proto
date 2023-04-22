// Original file: proto/demo.proto

export const MyType = {
  DEFAULT: 0,
  ENABLED: 1,
  DISABLED: 2,
} as const;

export type MyType =
  | 'DEFAULT'
  | 0
  | 'ENABLED'
  | 1
  | 'DISABLED'
  | 2

export type MyType__Output = typeof MyType[keyof typeof MyType]
