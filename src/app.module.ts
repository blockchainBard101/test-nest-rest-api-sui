import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcModule } from './calc/calc.module';
import { DatabaseModule } from './database/database.module';
import { CalculatorModule } from './calculator/calculator.module';
import { EventlistnerModule } from './eventlistner/eventlistner.module';

@Module({
  imports: [CalcModule, DatabaseModule, CalculatorModule, EventlistnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
