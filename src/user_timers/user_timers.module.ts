import { Module } from '@nestjs/common';
import { UserTimersService } from './user_timers.service';
import { UserTimersController } from './user_timers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTimers } from './entities/user_timer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTimers])],
  controllers: [UserTimersController],
  providers: [UserTimersService],
})
export class UserTimersModule {}
