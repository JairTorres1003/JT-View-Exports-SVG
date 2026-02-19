// biome-ignore lint/suspicious/noExplicitAny: This utility type is designed to be flexible and work with any handler function, so using `any` here is intentional to allow for a wide range of function signatures.
export type HandlerArgs<T extends Record<keyof T, (...args: any) => any>> = Parameters<
  T[keyof T]
>[0]

type ParamDefinition =
  | { required?: boolean; type: 'string'; default: string }
  | { required?: boolean; type: 'number'; default: number }
  | { required?: boolean; type: 'boolean'; default: boolean }
  | {
      required?: boolean
      type: 'object'
      default: Record<string, unknown>
      properties?: ParamsTypes
    }
  | { required?: boolean; type: 'function'; default: (...args: unknown[]) => unknown }
  | { required?: boolean; type: 'symbol'; default: symbol }
  | { required?: boolean; type: 'undefined'; default: undefined }
  | { required?: boolean; type: 'bigint'; default: bigint }

export type ParamsTypes = Record<string, ParamDefinition>
