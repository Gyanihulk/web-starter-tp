import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AuthVerifyOtpDto {
  @ApiProperty({
    description: 'The mobile number that the OTP was sent to',
    example: '9876543210',
  })
  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @ApiProperty({
    description: 'The OTP received by the user',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  otp: string;
}
