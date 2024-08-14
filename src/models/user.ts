import { Entity, Column, BeforeInsert } from "typeorm";
import { BaseEntity } from "../reusable/baseEntity";
import { addPrefix } from "../utils/generateUUID";

@Entity()
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  password: string;

  @BeforeInsert()
  private beforeInsert(): void {
    console.log(this.id);
    this.id = addPrefix(this.id, "user_");
  }
}
