import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { OtpStatusEnum } from '../otp-status.enum';


export class OtpStatusDto {
  @ApiProperty({
    example: 'not verified',  
  })
  @IsEnum(OtpStatusEnum, { message: 'status must be a valid enum value' })  
  status: OtpStatusEnum;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'The date when the OTP was created',
  })
  @IsOptional()  
  @IsString()    
  createdAt?: string;

  @ApiProperty({
    example: '2024-01-01T01:00:00.000Z',
    description: 'The date when the OTP status was last updated',
  })
  @IsOptional()  
  @IsString()    
  updatedAt?: string;
}
