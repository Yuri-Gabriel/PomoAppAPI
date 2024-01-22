/* eslint-disable prettier/prettier */

import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';

import { UserService } from './user.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('User')
export class UserController {

  constructor(private readonly usersService: UserService) {}

  @Post('/createUser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/findAllUsers')
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get('/findUser')
  findUser(@Body() userLogin: CreateUserDto) {
    return this.usersService.findOne(userLogin);
  }

  @Patch('/updateUser/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/removeUser/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

}
