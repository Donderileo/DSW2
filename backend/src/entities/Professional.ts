import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "./User";


@Entity("professionals")
export class Professional {

    @PrimaryColumn()
    id: string;

    @Column({ unique: true })
    user_id: string;

    @OneToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    name: string;

    @Column()
    area: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }
}