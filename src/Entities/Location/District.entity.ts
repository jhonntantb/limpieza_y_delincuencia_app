import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Province } from './Province.entity';

@Entity()
export class District {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Province, (province) => province.id)
  provinceId: Province;
}
