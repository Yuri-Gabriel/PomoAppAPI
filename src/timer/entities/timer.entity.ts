/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { Users } from '../../user/entities/user.entity';

@Entity()
export class Timer {
    @PrimaryGeneratedColumn()
    timer_id: number;

    @Column()
    forwork: number;

    @Column()
    forpause: number;

    @Column()
    sessions: number;

    @Column({ length: 20 })
    timer_name: string;

    @ManyToOne(() => Users, (user: Users) => user.user_id)
    user_id: number;
}
