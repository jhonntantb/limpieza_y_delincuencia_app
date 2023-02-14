import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categories } from './Categories.entity';

@Entity()
export class Subcategories {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Categories, (categories) => categories.id)
  category: Categories;
}
