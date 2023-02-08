import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('complaint')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getComplaints(): string {
    return this.appService.getComplaints();
  }
}
