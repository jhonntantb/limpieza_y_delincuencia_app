import { ApiProperty } from '@nestjs/swagger';

export class GetComplaints {
  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  start: number;

  @ApiProperty()
  size: number;

  @ApiProperty()
  district: string;

  @ApiProperty()
  year: Date;
}
