import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1723390117377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create the volunteer table
    await queryRunner.query(`
              CREATE TABLE IF NOT EXISTS "user" (
                "id" varchar PRIMARY KEY NOT NULL,
                "email" varchar NOT NULL,
                "phone_number" varchar NOT NULL,
                "password" varchar NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now()
              );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE IF EXISTS "user";
        `);
  }
}
