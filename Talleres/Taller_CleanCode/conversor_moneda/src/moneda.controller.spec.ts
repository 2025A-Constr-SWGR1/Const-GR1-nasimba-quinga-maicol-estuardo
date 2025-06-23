import { Test, TestingModule } from '@nestjs/testing';
import { MonedaController } from './moneda.controller';
import { MonedaService } from './moneda.service';
import { ConvertirMonedaDto } from './dto/convertir-moneda.dto';

describe('MonedaController', () => {
  let monedaController: MonedaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonedaController],
      providers: [MonedaService],
    }).compile();

    monedaController = module.get<MonedaController>(MonedaController);
  });

  describe('convertir', () => {
    it('debería convertir USD a EUR correctamente', () => {
      const dto: ConvertirMonedaDto = { origen: 'USD', destino: 'EUR', monto: 100 };
      const resultado = monedaController.convertir(dto);
      expect(resultado).toEqual({ resultado: 92 });
    });
  });
});
