/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TimerService } from './timer.service';
import { CreateTimerDto } from './dto/create-timer.dto';
import { Timer } from './entities/timer.entity';

@Controller('timer')
export class TimerController {
  constructor(private readonly timerService: TimerService) {}

  @Post()
  create(@Body() createTimerDto: CreateTimerDto) {
    return this.timerService.create(createTimerDto);
  }

  @Get()
  findAll() {
    return this.timerService.findAll();
  }

  @Delete()
  remove(@Body() TimerUserId: Timer) {
    return this.timerService.remove(TimerUserId.timer_id, TimerUserId.user_id);
  }
}
