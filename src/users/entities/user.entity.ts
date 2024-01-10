/* eslint-disable prettier/prettier */

import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    userid: number;

    @Column({ length: 20 })
    username: string;

    @Column({ length: 40 })
    useremails: string;

    @Column({ length: 40 })
    userpassword: string;
}
