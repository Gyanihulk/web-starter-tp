import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class OtpStatus {
  @Allow()
  @ApiProperty({
    type: String,
    example: 'not verified',
  })
  status: string;

  @Allow()
  @ApiProperty({
    type: Date,
    example: '2024-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @Allow()
  @ApiProperty({
    type: Date,
    example: '2024-01-01T01:00:00.000Z',
  })
  updatedAt: Date;
}
