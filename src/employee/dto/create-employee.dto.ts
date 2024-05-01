import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({
    example: 'Hermawan'
  })
  @IsString()
  readonly firstName: string;

  @ApiProperty({
    example: 'Jason'
  })
  @IsString()
  readonly lastName: string;

  @ApiProperty({
    example: 'Software Engineer'
  })
  @IsString()
  readonly position: string;

  @ApiProperty({
    example: '(818) 555-2325'
  })
  @IsString()
  readonly phone: string;

  @ApiProperty({
    example: 'hermawan@mail.com'
  })
  @IsEmail()
  readonly email: string;
}
