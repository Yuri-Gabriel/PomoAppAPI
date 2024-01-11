/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserTimerDto } from './dto/create-user_timer.dto';
import { UpdateUserTimerDto } from './dto/update-user_timer.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserTimers } from './entities/user_timer.entity';

import { UsersService } from '../users/users.service';

@Injectable()
export class UserTimersService {

  constructor(@InjectRepository(UserTimers) private usersRepository: Repository<UserTimers>) {}

  create(createUserTimerDto: CreateUserTimerDto) {
    UsersService.
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    if (await this.usersRepository.exists({ where: { ut_id: id } })) {
      return await this.usersRepository.find({ where: { ut_id: id }});
    } else {
      return {
        status: 404,
        mensage: 'Relação User-Timer não encontrada'
      }
    }
  }

  update(id: number, updateUserTimerDto: UpdateUserTimerDto) {
    return `This action updates a #${id} userTimer`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTimer`;
  }
}
