/* eslint-disable prettier/prettier */

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany
} from "typeorm";

import { Timer } from '../../timer/entities/timer.entity';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 20 })
    username: string;

    @Column({ length: 40 })
    useremails: string;

    @Column({ length: 40 })
    userpassword: string;

    @OneToMany(() => Timer, (timer: Timer) => timer.user_id)
    timers: Timer[];

}
