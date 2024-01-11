import { Test, TestingModule } from '@nestjs/testing';
import { UserTimersService } from './user_timers.service';

describe('UserTimersService', () => {
  let service: UserTimersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTimersService],
    }).compile();

    service = module.get<UserTimersService>(UserTimersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
