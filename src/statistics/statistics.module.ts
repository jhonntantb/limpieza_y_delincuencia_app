import { Module } from '@nestjs/common';
import { StatisticsPersistenceService } from './adapters/out/statistics-persistence.service';
import { StatisticsController } from './adapters/in/statistics.controller';
import { StatisticsSqlServerService } from './adapters/out/statistics-sql-server.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticsProvince } from 'src/Entities/Complaint/Statistics-Province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatisticsProvince])],
  providers: [StatisticsPersistenceService, StatisticsSqlServerService],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
