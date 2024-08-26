export type HandlerArgs<T extends Record<keyof T, (...args: any) => any>> = Parameters<T[keyof T]>[0]
