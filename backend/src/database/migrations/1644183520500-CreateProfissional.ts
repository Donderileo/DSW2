import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { v4 } from "uuid";

export class CreateProfissional1644183520500 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'professionals',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "area",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_user_id",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        );
        const uuid = v4()
        await queryRunner.query(`INSERT INTO USERS (ID, USERNAME, PASSWORD, ROLE) VALUES (${uuid},'admin', 'admin', 'Admin'`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("professionals");
    }
}
