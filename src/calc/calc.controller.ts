import { Controller, Get } from '@nestjs/common';

@Controller('calc')
export class CalcController {
  @Get('/')
  create() {
    return {
      message: 'History',
    };
  }
}
