import { Test, TestingModule } from '@nestjs/testing';
import { UserTimersController } from './user_timers.controller';
import { UserTimersService } from './user_timers.service';

describe('UserTimersController', () => {
  let controller: UserTimersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTimersController],
      providers: [UserTimersService],
    }).compile();

    controller = module.get<UserTimersController>(UserTimersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
