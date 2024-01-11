import { Module } from '@nestjs/common';
import { TimersService } from './timers.service';
import { TimersController } from './timers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timers } from './entities/timer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Timers])],
  controllers: [TimersController],
  providers: [TimersService],
})
export class TimersModule {}
