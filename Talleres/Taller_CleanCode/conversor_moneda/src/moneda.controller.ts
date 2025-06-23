import { Controller, Post, Body } from '@nestjs/common';
import { MonedaService } from './moneda.service';
import { ConvertirMonedaDto } from './dto/convertir-moneda.dto';

@Controller('moneda')
export class MonedaController {
  constructor(private readonly monedaService: MonedaService) {}

  @Post('convertir')
  convertir(@Body() dto: ConvertirMonedaDto) {
    const resultado = this.monedaService.convertir(dto.origen, dto.destino, dto.monto);
    return { resultado };
  }
}