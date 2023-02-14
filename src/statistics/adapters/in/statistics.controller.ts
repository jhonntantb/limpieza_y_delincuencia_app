import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatisticsPersistenceService } from '../out/statistics-persistence.service';

const entity = 'statistics';

@ApiTags(entity)
@Controller({
  path: entity,
  version: '1',
})
export class StatisticsController {
  constructor(
    private readonly statisticsService: StatisticsPersistenceService,
  ) {}
  @Get('general')
  async getStatisticsGeneral(
    @Query('province') province: string,
    @Query('year') year: string,
  ) {
    const res = await this.statisticsService.getStatisticsGeneral(
      province,
      year,
    );
    return res;
  }
}
