import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { District } from '../Location/District.entity';
import { Subcategories } from './Subcategories.entity';
import { User } from './User.entity';

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  location: string;

  @Column('text')
  comments: string;

  @ManyToOne(() => Subcategories, (subcategories) => subcategories.id)
  subCategory: number;

  @Column()
  calification: number;

  @Column()
  date: Date;

  @Column()
  hour: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => District, (distric) => distric.id)
  district: District;
}
