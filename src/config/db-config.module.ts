import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'mysql',

        host: config.getOrThrow('MYSQL_HOST'),
        port: config.getOrThrow('MYSQL_PORT'),
        username: config.getOrThrow('MYSQL_USERNAME'),
        password: config.getOrThrow('MYSQL_PASSWORD'),
        database: config.getOrThrow('MYSQL_DATABASE'),

        autoLoadEntities: true,

        synchronize: false,

        logging: config.get('NODE_ENV') === 'development',
      }),

      inject: [ConfigService],
    }),
  ],
})
export class DbConfigModule {}
