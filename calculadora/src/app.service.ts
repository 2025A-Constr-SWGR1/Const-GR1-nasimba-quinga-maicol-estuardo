import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.warn('warn!');
    console.error('error!');
    return 'Hello World!!';
  }
}
