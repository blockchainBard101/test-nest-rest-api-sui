import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { setupListeners } from './event-indexer';

@Injectable()
export class EventlistnerService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('EventlistnerService is running');
    setupListeners();
  }
}
