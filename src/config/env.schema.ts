import * as z from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['production', 'development']).default('development'),

  PORT: z.coerce.number().int().positive().default(3000),

  APP_NAME: z.string().min(1).default('WorkNest'),

  DB_HOST: z.string().min(1),

  DB_PORT: z.coerce.number().int().positive().default(3306),

  DB_USERNAME: z.string().min(1),

  DB_PASSWORD: z.string(),

  DB_NAME: z.string().min(1),
});

export type Env = z.infer<typeof EnvSchema>;
