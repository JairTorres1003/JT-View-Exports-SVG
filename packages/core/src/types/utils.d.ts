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
