import { Module } from '@nestjs/common';
import { ComplaintController } from './complaint.controller';
import { Complaint } from './complaint';

@Module({
  controllers: [ComplaintController],
  providers: [Complaint]
})
export class ComplaintModule {}
