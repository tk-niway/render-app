import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 10000;

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}:${port}`);
}
bootstrap();
