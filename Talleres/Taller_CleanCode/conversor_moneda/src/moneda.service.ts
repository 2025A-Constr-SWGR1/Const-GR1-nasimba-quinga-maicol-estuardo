import { Injectable } from '@nestjs/common';

@Injectable()
export class MonedaService {
  private readonly tasas = {
    USD: { EUR: 0.92, USD: 1 },
    EUR: { USD: 1.09, EUR: 1 },
  };

  convertir(origen: string, destino: string, monto: number): number {
    if (!this.tasas[origen] || !this.tasas[origen][destino]) {
      throw new Error('Moneda no soportada');
    }
    return monto * this.tasas[origen][destino];
  }
}