import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StatisticsProvince {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  province: string;

  @Column()
  year: number;

  @Column()
  averageCleaning: number;

  @Column()
  rateCrime: number;

  @Column()
  district: string;

  @Column()
  totalComplaintCleaning: number;

  @Column()
  totalComplaintCrime: number;
}
