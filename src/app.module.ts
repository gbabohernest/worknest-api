import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvSchema } from './config/env.schema.js';
import { DbConfigModule } from './config/db-config.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate: (config) => EnvSchema.parse(config),
    }),
    DbConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
