import { z } from 'zod'

/**
 * This schema is used to validate the environment variables that are used by the client.
 */
const configSchema = z.object({
  /**
   * The URL of the API that the client will use to communicate with the server.
   */
  VITE_VSCODE_API_URL: z.url(),
})

configSchema.parse(import.meta.env)

declare global {
  interface ImportMetaEnv extends z.infer<typeof configSchema> {}
}
