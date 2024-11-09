import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class AuthRegisterMobileDto {
  @ApiProperty({
    minLength: 10,
    example: '9876543210',
  })
  @MinLength(10)
  @IsNotEmpty()
  mobileNumber: string;

}
