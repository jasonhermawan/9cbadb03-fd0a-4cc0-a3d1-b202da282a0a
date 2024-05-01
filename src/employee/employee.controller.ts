import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { GetEmployeesDto } from './dto/get-employees.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/')
  @ApiQuery({ name: 'sortOrder', type: String, required: false })
  @ApiQuery({ name: 'sortBy', type: String, required: false })
  @ApiQuery({ name: 'ITEM_PER_PAGE', type: String, required: true })
  @ApiQuery({ name: 'page', type: String, required: true })
  async getEmployees(@Query() query: GetEmployeesDto) {
    return await this.employeeService.getEmployees(query);
  }

  @Post('/')
  async createEmployee(@Body() body: CreateEmployeeDto) {
    return await this.employeeService.createEmployee(body);
  }

  @Patch('/:id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() body: UpdateEmployeeDto,
  ) {
    return await this.employeeService.updateEmployee(id, body);
  }

  @Delete('/:id')
  async deleteEmployee(@Param('id') id: string) {
    return await this.employeeService.deleteEmployee(id);
  }
}
