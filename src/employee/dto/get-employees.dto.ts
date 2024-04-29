import { IsString } from 'class-validator';

export class GetEmployeesDto {
  @IsString()
  readonly page: string;

  @IsString()
  readonly sortBy: string;

  @IsString()
  readonly sortOrder: string;

  @IsString()
  readonly ITEM_PER_PAGE: string;
}
