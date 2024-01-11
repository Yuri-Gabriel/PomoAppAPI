/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Timers {
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
}
