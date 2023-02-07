import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/Complaint/User.entity';
import { Categories } from './Entities/Complaint/Categories.entity';
import { Complaint } from './Entities/Complaint/Complaint.entity';
import { Subcategories } from './Entities/Complaint/Subcategories.entity';
import { Country } from './Entities/Location/Country.entity';
import { Demography } from './Entities/Location/Demography.entity';
import { Department } from './Entities/Location/Department.entity';
import { District } from './Entities/Location/District.entity';
import { Province } from './Entities/Location/Province.entity';
import { Photo } from './Entities/Complaint/Photo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        port: 1433,
        host: configService.get('SERVER_SQL_HOST'),
        username: configService.get('SERVER_SQL_USERNAME'),
        password: configService.get('SERVER_SQL_PASSWORD'),
        database: configService.get('SERVER_SQL_DATABASE'),
        entities: [
          User,
          Categories,
          Complaint,
          Subcategories,
          Country,
          Demography,
          Department,
          Province,
          District,
          Photo,
        ],
        synchronize: true,
        autoLoadEntities: true,
        extra: {
          trustServerCertificate: true,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
