import 'dotenv/config';
import { EnvSchema } from '../config/env.schema.js';

import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity.js';

const env = EnvSchema.parse(process.env);

const migrationsDirectory = join(
  dirname(fileURLToPath(import.meta.url)),
  'migrations',
);

export default new DataSource({
  type: 'mysql',

  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,

  entities: [User],

  migrations: [join(migrationsDirectory, '*.ts')],

  migrationsTableName: 'typeorm_migrations',

  synchronize: false,

  logging: env.NODE_ENV !== 'development',
});
