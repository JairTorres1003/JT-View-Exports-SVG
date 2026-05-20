import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  SITE_URL: z.url(),

  ALGOLIA_APP_ID: z.string().min(1),
  ALGOLIA_API_KEY: z.string().min(1),
  ALGOLIA_INDEX_NAME: z.string().min(1),
  ALGOLIA_SITE_VERIFICATION: z.string(),
})

envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
