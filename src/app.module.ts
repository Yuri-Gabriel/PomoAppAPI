/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { TimerModule } from './timer/timer.module';

import { Users } from './user/entities/user.entity';
import { Timer } from './timer/entities/timer.entity';

import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Users, Timer],
      synchronize: true,
      },
    ),
    UserModule,
    TimerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
