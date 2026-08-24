import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? 'true' : undefined) as boolean | 'true' | 'false'
