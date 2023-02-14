import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const entity = 'statistics';

@ApiTags(entity)
@Controller({
  path: entity,
  version: '1',
})
export class StatisticsController {
  constructor() {}
  @Get('statistics/general')
  async getStatisticsGeneral(
    @Query('province') province: string,
    @Query('year') year: string,
  ) {
    //const res = await this.appService.getStatisticsGeneral(province, year);
    return 'hola';
  }
}
