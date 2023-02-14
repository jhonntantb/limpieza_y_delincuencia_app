import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatisticsProvince } from 'src/Entities/Complaint/Statistics-Province.entity';
import { Repository } from 'typeorm';
import { IStatisticsRepository } from './statistics.repository';

@Injectable()
export class StatisticsSqlServerService implements IStatisticsRepository {
  constructor(
    @InjectRepository(StatisticsProvince)
    private statisticsProvinceRepository: Repository<StatisticsProvince>,
  ) {}
  async getStatisticsGeneral(province: string, year: string): Promise<any> {
    try {
      const statistics = await this.statisticsProvinceRepository.find({
        where: {
          province: province,
          year: parseInt(year),
        },
        select: {
          district: true,
          averageCleaning: true,
          rateCrime: true,
          totalComplaintCleaning: true,
          totalComplaintCrime: true,
        },
      });
      return statistics;
    } catch (error) {
      console.log('Statistics Error', error);
    }
  }
}
