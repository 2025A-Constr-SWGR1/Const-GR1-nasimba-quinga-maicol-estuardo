import { Module } from '@nestjs/common';
import { MonedaController } from './moneda.controller';
import { MonedaService } from './moneda.service';

@Module({
  controllers: [MonedaController],
  providers: [MonedaService],
})
export class MonedaModule {}