import { Module } from '@nestjs/common';
import { EventlistnerService } from './eventlistner.service';

@Module({
  providers: [EventlistnerService],
})
export class EventlistnerModule {}
