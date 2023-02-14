import { Injectable } from '@nestjs/common';
import { StatisticsSqlServerService } from './statistics-sql-server.service';

@Injectable()
export class StatisticsPersistenceService {
  constructor(private statisticsSqlService: StatisticsSqlServerService) {}
  getStatisticsGeneral(province: string, year: string): Promise<any> {
    return this.statisticsSqlService.getStatisticsGeneral(province, year);
  }
}
