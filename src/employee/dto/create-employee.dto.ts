import { IsEmail, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly position: string;

  @IsString()
  readonly phone: string;

  @IsEmail()
  readonly email: string;
}
