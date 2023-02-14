import { Module } from '@nestjs/common';
import { ComplaintController } from './adapters/in/complaint.controller';
import { Complaint } from './adapters/out/complaint';

@Module({
  controllers: [ComplaintController],
  providers: [Complaint],
})
export class ComplaintModule {}
