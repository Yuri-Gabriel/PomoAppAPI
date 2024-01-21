/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Users } from './user/entities/user.entity';
import { TimerModule } from './timer/timer.module';
import { Timer } from './timer/entities/timer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pomoappdb',
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
