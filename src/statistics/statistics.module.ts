import { Module } from '@nestjs/common';
import { Statistics } from './adapters/out/statistics-persistence.service';
import { StatisticsController } from './adapters/in/statistics.controller';

@Module({
  providers: [Statistics],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
