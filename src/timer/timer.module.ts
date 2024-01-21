import { Module } from '@nestjs/common';
import { TimerService } from './timer.service';
import { TimerController } from './timer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timer } from './entities/timer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Timer])],
  controllers: [TimerController],
  providers: [TimerService],
})
export class TimerModule {}
