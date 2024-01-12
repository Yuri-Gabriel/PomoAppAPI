/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTimerDto } from './dto/create-timer.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Timers } from './entities/timer.entity';

@Injectable()
export class TimersService {

  constructor(@InjectRepository(Timers) private usersRepository: Repository<Timers>) {}

  async TimerExists(createTimerDto: CreateTimerDto): Promise<boolean> {
    if(await this.usersRepository.exists({ where: { 
      timer_name: createTimerDto.timer_name,
    }})) {
      return true;
    } else {
      return false;
    }
  }

  async create(createTimerDto: CreateTimerDto): Promise<object> {
    if(await this.TimerExists(createTimerDto)) {
      return {
        status: 401,
        mensage: 'Nome já cadastrado'
      }
    } else {
      return this.usersRepository.save(createTimerDto);
    }
  }

  async findAll(): Promise<Array<Timers>> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<object> {
    if (await this.usersRepository.exists({ where: { timer_id: id } })) {
      return await this.usersRepository.find({ where: { timer_id: id }});
    } else {
      return {
        status: 404,
        mensage: 'Usuario não encontrado'
      }
    }
  }

  async remove(id: number): Promise<object> {
    const result = await this.usersRepository.delete(id);
    if(result.affected == 1) {
      return {
        status: 200,
        mensage: 'Timer deletado'
      }
    } else {
      return {
        status: 404,
        mensage: 'Não foi possível deletar o timer solicitado'
      }
    }
  }
}
