/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Users) public usersRepository: Repository<Users>) {}

  async UserExists(user: CreateUserDto) {
    const result = await this.usersRepository.countBy([
      { username: user.username },
      { useremails: user.useremails }
    ])
    return result == 1 ? true : false;
  }

  async UserExistsByID(id: number) {
    const userExist = await this.usersRepository.existsBy({ user_id: id });
    if (!userExist) {
      throw new NotFoundException("User not found");
    }
  }
  
  async create(createUserDto: CreateUserDto) {
    if(await this.UserExists(createUserDto)) {
      throw new UnauthorizedException("User already exists");
    }

    return this.usersRepository.save(createUserDto);
  }

  async findAllUsers() {
    return await this.usersRepository.find({ relations: ['timers'] });
  }

  async findOne(userLogin: CreateUserDto) {
    const result = await this.usersRepository.existsBy({
      useremails: userLogin.useremails,
      userpassword: userLogin.userpassword
    })

    if(!result) {
      throw new NotFoundException("User not found");
    }

    const user = await this.usersRepository.find({ where: {
      useremails: userLogin.useremails,
      userpassword: userLogin.userpassword
    }, relations: ['timers']})

    return user[0];
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.UserExistsByID(id);

    return await this.usersRepository.update({ user_id: id }, updateUserDto);
  }

  async remove(id: number) {
    await this.UserExistsByID(id);

    return await this.usersRepository.delete({ user_id: id });
  }
}
