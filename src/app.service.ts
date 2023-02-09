/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatisticsProvince } from './Entities/Complaint/Statistics-Province.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(StatisticsProvince)
    private statisticsProvinceRepository: Repository<StatisticsProvince>,
  ) {}

  getComplaints(): string {
    return 'Hello World!';
  }

  async getStatisticsProvince(province: string, year: string) {
    const statistics = await this.statisticsProvinceRepository.find({
      where: {
        province: province,
        year: parseInt(year),
      },
    });
    return statistics;
  }

  async getStatisticsGeneral(province: string, year: string) {
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
  }
}
