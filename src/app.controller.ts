import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('complaint')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getComplaints() {
    return this.appService.getComplaints();
  }

  @Get('statistics')
  async getStatisticsProvince(
    @Query('province') province: string,
    @Query('year') year: string,
  ) {
    const res = await this.appService.getStatisticsProvince(province, year);
    return res;
  }

  @Get('statistics/general')
  async getStatisticsGeneral(
    @Query('province') province: string,
    @Query('year') year: string,
  ) {
    const res = await this.appService.getStatisticsGeneral(province, year);
    return res;
  }
}
