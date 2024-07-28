import { Column, PrimaryGeneratedColumn } from "typeorm";

export class softDeletableEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  deleted_at: Date;
}
