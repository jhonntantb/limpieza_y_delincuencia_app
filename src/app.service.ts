import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getComplaints(): string {
    return 'Hello World!';
  }
}
