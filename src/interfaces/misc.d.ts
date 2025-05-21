export type HandlerArgs<T extends Record<keyof T, (...args: any) => any>> = Parameters<
  T[keyof T]
>[0]

type ParamDefinition =
  | { type: 'string'; default: string }
  | { type: 'number'; default: number }
  | { type: 'boolean'; default: boolean }
  | { type: 'object'; default: Record<string, unknown>; properties?: ParamsTypes }
  | { type: 'function'; default: (...args: any[]) => any }
  | { type: 'symbol'; default: symbol }
  | { type: 'undefined'; default: undefined }
  | { type: 'bigint'; default: bigint }

export type ParamsTypes = Record<string, ParamDefinition>
