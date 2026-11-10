import * as z from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['production', 'development']).default('development'),

  PORT: z.coerce.number().int().positive().default(3000),

  APP_NAME: z.string().min(1).default('WorkNest'),

  MYSQL_HOST: z.string().min(1),

  MYSQL_PORT: z.coerce.number().int().positive().default(3306),

  MYSQL_USERNAME: z.string().min(1),

  MYSQL_PASSWORD: z.string(),

  MYSQL_DATABASE: z.string().min(1),
});

export type Env = z.infer<typeof EnvSchema>;
