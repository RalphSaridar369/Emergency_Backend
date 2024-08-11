import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRole1723390031038 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create the role table with raw SQL
    await queryRunner.query(`
          CREATE TABLE IF NOT EXISTS "role" (
            "id" varchar PRIMARY KEY NOT NULL,
            "name" varchar UNIQUE NOT NULL
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the role table with raw SQL
    await queryRunner.query(`
          DROP TABLE IF EXISTS "role";
        `);
  }
}
