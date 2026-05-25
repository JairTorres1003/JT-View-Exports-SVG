import { z } from 'zod'

const baseUrlSchema = z.url().refine((value) => !value.endsWith('/'), {
  message: 'URL must not end with a slash',
})

const configSchema = z
  .object({
    VITE_VSCODE_API_URL: baseUrlSchema.optional(),
  })
  .superRefine((env, ctx) => {
    if (import.meta.env.DEV && !env.VITE_VSCODE_API_URL) {
      ctx.addIssue({
        code: 'custom',
        path: ['VITE_VSCODE_API_URL'],
        message: 'VITE_VSCODE_API_URL is required in development',
      })
    }
  })

configSchema.parse(import.meta.env)

declare global {
  interface ImportMetaEnv extends z.infer<typeof configSchema> {}
}
