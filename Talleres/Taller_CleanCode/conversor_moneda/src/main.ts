import { NestFactory } from '@nestjs/core';
import { MonedaModule } from './moneda.module';

async function bootstrap() {
  const app = await NestFactory.create(MonedaModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
