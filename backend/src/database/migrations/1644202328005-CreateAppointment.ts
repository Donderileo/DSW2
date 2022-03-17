import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointment1644202328005 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "client_id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "professional_id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        isPrimary: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_client_id",
                        columnNames: ["client_id"],
                        referencedTableName: "clients",
                        referencedColumnNames: ["id"],
                    },
                    {
                        name: "fk_professional_id",
                        columnNames: ["professional_id"],
                        referencedTableName: "professionals",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }

}
