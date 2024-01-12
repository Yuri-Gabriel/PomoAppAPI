/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) public usersRepository: Repository<Users>) {}

  async UserExists(createUserDto: CreateUserDto): Promise<boolean> {
    if(await this.usersRepository.exists({ where: { 
      username: createUserDto.username,
    }})) {
      return true;
    } else if(await this.usersRepository.exists({ where: { 
      useremails: createUserDto.useremails,
    }})) {
      return true;
    } else if(await this.usersRepository.exists({ where: { 
      userpassword: createUserDto.userpassword
    }})) {
      return true;
    } else {
      return false;
    }
  }
  
  async create(createUserDto: CreateUserDto): Promise<object> {
    if(await this.UserExists(createUserDto)) {
      return {
        status: 401,
        mensage: 'Credenciais já cadastradas'
      }
    } else {
      return await this.usersRepository.save(createUserDto);
    }
    
  }

  async findAllUsers(): Promise<Array<Users>> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<object> {
    if (await this.usersRepository.exists({ where: { userid: id } })) {
      return await this.usersRepository.find({ where: { userid: id }});
    } else {
      return {
        status: 404,
        mensage: 'Usuario não encontrado'
      }
    }
    
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<object> {
    if (await this.usersRepository.exists({ where: { userid: id } })) {
      return await this.usersRepository.update(id, updateUserDto);
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
        mensage: 'Usuario deletado'
      }
    } else {
      return {
        status: 404,
        mensage: 'Não foi possível deletar o usuario solicitado'
      }
    }
  }
}
