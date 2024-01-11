/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class UserTimers {
    @PrimaryGeneratedColumn()
    ut_id: number;

    @Column()
    ut_user: number;

    @Column()
    ut_timer: number;

}
