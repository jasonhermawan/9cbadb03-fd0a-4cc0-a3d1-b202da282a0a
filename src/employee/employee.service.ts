import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetEmployeesDto } from './dto/get-employees.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async getEmployees(query: GetEmployeesDto) {
    const { page, sortBy, sortOrder, ITEM_PER_PAGE } = query;
    const offset = (Number(page) - 1) * Number(ITEM_PER_PAGE);

    const employees = await this.prisma.employee.findMany({
      ...(ITEM_PER_PAGE ? { take: Number(ITEM_PER_PAGE) } : {}),
      ...(offset ? { skip: offset } : {}),
      ...(sortBy && sortOrder ? { orderBy: { [sortBy]: sortOrder } } : {}),
    });

    const totalEmployees = await this.prisma.employee.findMany();

    return {
      data: employees,
      length: totalEmployees.length,
      totalPage: Math.ceil(totalEmployees.length / Number(ITEM_PER_PAGE)),
    };
  }

  async createEmployee(body: CreateEmployeeDto) {
    const employee = await this.prisma.employee.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        position: body.position,
        phone: body.phone,
        email: body.email,
      },
    });

    return employee;
  }

  async updateEmployee(id: string, body: UpdateEmployeeDto) {
    const { firstName, lastName, position, phone, email } = body;
    const updateEmployee = await this.prisma.employee.update({
      where: {
        id: Number(id),
      },
      data: {
        ...(firstName ? { firstName } : {}),
        ...(lastName ? { lastName } : {}),
        ...(position ? { position } : {}),
        ...(phone ? { phone } : {}),
        ...(email ? { email } : {}),
      },
    });

    return updateEmployee;
  }

  async deleteEmployee(id: string) {
    await this.prisma.employee.delete({
      where: {
        id: Number(id),
      },
    });

    return {
      message: `Employee id ${id} is deleted.`,
    };
  }
}
