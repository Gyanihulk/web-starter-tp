import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { RoleDto } from '../../roles/dto/role.dto';
import { StatusDto } from '../../statuses/dto/status.dto';
import { Type } from 'class-transformer';

export class CreateUserMobileDto {
  @ApiProperty({ example: '9876543210', type: String })
  @IsNotEmpty()
  @IsString()
  @Length(10, 15)  
  mobileNumber: string |null;


  @ApiPropertyOptional({ type: RoleDto })
  @IsOptional()
  @Type(() => RoleDto)
  role?: RoleDto | null;

  @ApiPropertyOptional({ type: StatusDto })
  @IsOptional()
  @Type(() => StatusDto)
  status?: StatusDto;
}
