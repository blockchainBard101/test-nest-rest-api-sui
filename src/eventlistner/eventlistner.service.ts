import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class EventlistnerService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('EventlistnerService is running');
  }
}
