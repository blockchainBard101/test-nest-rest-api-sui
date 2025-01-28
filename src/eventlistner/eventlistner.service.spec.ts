import { Test, TestingModule } from '@nestjs/testing';
import { EventlistnerService } from './eventlistner.service';

describe('EventlistnerService', () => {
  let service: EventlistnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventlistnerService],
    }).compile();

    service = module.get<EventlistnerService>(EventlistnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
