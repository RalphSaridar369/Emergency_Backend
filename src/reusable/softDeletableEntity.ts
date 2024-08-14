import { BeforeInsert, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export class softDeletableEntity {
  @PrimaryColumn({ type: "varchar", length: 36 })
  id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  deleted_at: Date;

  @BeforeInsert()
  private setId(): void {
    this.id = uuidv4();
  }
}
