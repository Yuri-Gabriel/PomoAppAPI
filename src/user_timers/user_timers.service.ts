/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserTimerDto } from './dto/create-user_timer.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserTimers } from './entities/user_timer.entity';

@Injectable()
export class UserTimersService {

  constructor(@InjectRepository(UserTimers) private usersRepository: Repository<UserTimers>) {}

  create(createUserTimerDto: CreateUserTimerDto): Promise<UserTimers> {
    return this.usersRepository.save(createUserTimerDto);
  }

  async findAll(): Promise<Array<UserTimers>> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<object> {
    if (await this.usersRepository.exists({ where: { ut_id: id } })) {
      return await this.usersRepository.find({ where: { ut_id: id }});
    } else {
      return {
        status: 404,
        mensage: 'Relação User-Timer não encontrada'
      }
    }
  }

  async findAllUTFromUser(user_id: number) {
    if(await this.usersRepository.exists({ where: { ut_user: user_id } })) {
      return await this.usersRepository.find({
        where: { ut_user: user_id },
        
      });
    } else {
      return {
        status: 404,
        message: 'Usuario sem Timers ou inexistente'
      }
    }
  }

  async remove(id: number): Promise<object> {
    const result = await this.usersRepository.delete(id);
    if(result.affected == 1) {
      return {
        status: 200,
        mensage: 'UT deletado'
      }
    } else {
      return {
        status: 404,
        mensage: 'Não foi possível deletar a relação UT solicitada'
      }
    }
  }
  
}

