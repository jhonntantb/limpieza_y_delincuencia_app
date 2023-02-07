import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Country } from './country.entity';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  // @ManyToOne(() => Country, (country) => country.id)
  // countryId: Country;
}
