import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CalculatorService {
  constructor(private readonly databaseService: DatabaseService) {}
  // async create(createCalculatorDto: Prisma.CalcCreateInput) {
  //   return 'This action adds a new calculator';
  // }

  async findAll() {
    return this.databaseService.calc.findMany();
  }

  // async findOne(id: number) {
  //   return `This action returns a #${id} calculator`;
  // }

  // async update(id: number, updateCalculatorDto: Prisma.CalcUpdateInput) {
  //   return `This action updates a #${id} calculator`;
  // }

  // async remove(id: number) {
  //   return `This action removes a #${id} calculator`;
  // }
}
