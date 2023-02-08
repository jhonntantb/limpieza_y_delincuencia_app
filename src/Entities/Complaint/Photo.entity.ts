import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Complaint } from './Complaint.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  complaintId: string;

  @ManyToOne(() => Complaint, (complaint) => complaint.id)
  complaint: Complaint;
}
