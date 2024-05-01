import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @ApiProperty({
    example: 'New First Name'
  })
  @IsOptional()
  @IsString()
  readonly firstName?: string;

  @ApiProperty({
    example: 'New Last Name'
  })
  @IsOptional()
  @IsString()
  readonly lastName?: string;

  @ApiProperty({
    example: 'New Position'
  })
  @IsOptional()
  @IsString()
  readonly position?: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @ApiProperty({
    example: 'newemail@mail.com'
  })
  @IsOptional()
  @IsEmail()
  readonly email?: string;
}
