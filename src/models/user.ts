import { Entity, Column, ManyToOne, JoinColumn, BeforeInsert } from "typeorm";
import { BaseEntity } from "../reusable/baseEntity";
import { addPrefix } from "../utils/generateUUID";

@Entity()
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  number: string;

  @Column()
  password: string;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = addPrefix(this.id, "user_");
  }
}
