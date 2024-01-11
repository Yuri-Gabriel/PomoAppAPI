/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { TimersModule } from './timers/timers.module';
import { Timers } from './timers/entities/timer.entity';
import { UserTimersModule } from './user_timers/user_timers.module';
import { UserTimers } from './user_timers/entities/user_timer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pomoappdb',
      entities: [Users, Timers, UserTimers],
      synchronize: true,
      },
    ),
    UsersModule,
    TimersModule,
    UserTimersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
