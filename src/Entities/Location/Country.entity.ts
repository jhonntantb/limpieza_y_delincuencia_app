import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Department } from './Department.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
