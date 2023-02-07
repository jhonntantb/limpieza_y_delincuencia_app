import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Country } from './country.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  documentNumber: number;
}
