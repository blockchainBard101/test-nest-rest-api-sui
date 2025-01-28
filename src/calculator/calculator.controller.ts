import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { CalculatorService } from './calculator.service';
// import { Prisma } from '@prisma/client';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  // @Post()
  // create(@Body() createCalculatorDto: Prisma.CalcCreateInput) {
  //   return this.calculatorService.create(createCalculatorDto);
  // }

  @Get()
  findAll() {
    return this.calculatorService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.calculatorService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCalculatorDto: Prisma.CalcUpdateInput,
  // ) {
  //   return this.calculatorService.update(+id, updateCalculatorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.calculatorService.remove(+id);
  // }
}
