import { Test, TestingModule } from '@nestjs/testing';
import { TimersController } from './timers.controller';
import { TimersService } from './timers.service';

describe('TimersController', () => {
  let controller: TimersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimersController],
      providers: [TimersService],
    }).compile();

    controller = module.get<TimersController>(TimersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
