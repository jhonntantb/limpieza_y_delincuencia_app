import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Subcategories } from './Subcategories.entity';
import { User } from './User.entity';

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  location: string;

  @Column('string', { array: true })
  photos: string[];

  @Column('text')
  comments: string;

  @ManyToOne(() => Subcategories, (subcategories) => subcategories.id)
  categoryId: number;

  @Column()
  calification: number;

  @Column()
  date: Date;

  @Column()
  hour: Date;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;
}
