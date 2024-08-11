import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateVolunteer1723414000995 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create the volunteer table
    await queryRunner.query(`
              CREATE TABLE IF NOT EXISTS "volunteer" (
                "id" varchar PRIMARY KEY NOT NULL,
                "volunteer_id" integer NOT NULL,
                "password" varchar NOT NULL,
                "role_id" varchar NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now()
              );
            `);

    // Define and create the foreign key constraint
    const foreignKey = new TableForeignKey({
      columnNames: ["role_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "role",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      name: "FK_Volunteer_Role",
    });

    await queryRunner.createForeignKey("volunteer", foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("volunteer", "FK_Volunteer_Role");

    await queryRunner.query(`
            DROP TABLE IF EXISTS "volunteer";
        `);
  }
}
