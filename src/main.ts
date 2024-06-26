import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })),
    await app.listen(3100, () => {
      console.log(`currency conversion code running on port 3100`);
    });
}
bootstrap();
