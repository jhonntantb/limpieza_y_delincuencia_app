import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { District } from './District.entity';

@Entity()
export class Demography {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  schoolsNumber: number;

  @Column()
  hospitalNumber: number;

  @Column()
  policeStationNumber: number;

  @Column()
  clinicNumber: number;

  @Column()
  parksNumber: number;

  @Column()
  extension: number;

  @Column()
  population: number;

  @Column()
  birthRate: number;

  @Column()
  mortalityRate: number;

  @Column()
  educationLevel: number;

  @Column()
  foodQuality: number;

  @Column()
  wealthLevel: number;

  @ManyToOne(() => District, (district) => district.id)
  district: District;
}
