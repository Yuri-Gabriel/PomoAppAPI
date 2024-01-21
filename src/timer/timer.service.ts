/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateTimerDto } from './dto/create-timer.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Timer } from './entities/timer.entity';

@Injectable()
export class TimerService {

  constructor(@InjectRepository(Timer) private usersRepository: Repository<Timer>) {}

  async TimerExists(createTimerDto: CreateTimerDto): Promise<boolean> {
    const result = await this.usersRepository.countBy({
      timer_name: createTimerDto.timer_name,
      user_id: createTimerDto.user_id
    });

    return result == 1 ? true : false;
  }

  async UserExist(user_id: number): Promise<boolean> {
    const result: Timer[] =  await this.usersRepository.find({
      where: { user_id: user_id },
      relations: ['user_id']
    });

    return result[0] == undefined ? false : true;
  }

  async create(createTimerDto: CreateTimerDto) {
    if(await this.TimerExists(createTimerDto)) {
      throw new UnauthorizedException("Timer already exists")
    }

    await this.usersRepository.save(createTimerDto);
  }

  async findAll() {
    return await this.usersRepository.find({ relations: ['user_id'] });
  }


  async remove(id_timer: number, id_user: number) {
    const exist = await this.usersRepository.existsBy({
      timer_id: id_timer,
      user_id: id_user
    });
    
    if(!exist) {
      throw new NotFoundException("Timer nou found");
    }

    return await this.usersRepository.delete({ timer_id: id_timer });
  }
}
