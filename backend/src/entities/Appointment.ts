import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn } from "typeorm";


@Entity('appointments')
export class Appointment {

    @Generated("uuid")
    id: string;

    @PrimaryColumn()
    client_id: string;

    @PrimaryColumn()
    professional_id: string;

    @PrimaryColumn()
    date: string;

    @CreateDateColumn()
    created_at: Date;

}