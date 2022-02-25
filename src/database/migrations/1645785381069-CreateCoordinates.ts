import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateCoordinates1645785381069 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "coordinates",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "latitude",
                  type: "varchar",
                },
                {
                  name: "longitude",
                  type: "varchar",
                },
                {
                  name: "user_id",
                  type: "uuid",
                },
                {
                  name:"email",
                  type:"varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
      
              foreignKeys: [
                {
                  name: "FKUserId",
                  columnNames: ["user_id"],
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("coordinates");
    }

}
