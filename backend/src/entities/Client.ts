import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "./User";


@Entity("clients")
export class Client {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @OneToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    name: string;

    @Column()
    age: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }
}