import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableShutdownHooks();

  const config = app.get(ConfigService);

  const port = config.getOrThrow<number>('PORT');

  await app.listen(port);
}
await bootstrap();
