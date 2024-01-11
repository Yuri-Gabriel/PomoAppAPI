/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTimersService } from './user_timers.service';
import { CreateUserTimerDto } from './dto/create-user_timer.dto';
import { UpdateUserTimerDto } from './dto/update-user_timer.dto';

@Controller('UserTimers')
export class UserTimersController {
  constructor(private readonly userTimersService: UserTimersService) {}

  @Post()
  create(@Body() createUserTimerDto: CreateUserTimerDto) {
    return this.userTimersService.create(createUserTimerDto);
  }

  @Get()
  findAll() {
    return this.userTimersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTimersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTimersService.remove(+id);
  }
}
