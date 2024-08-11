import { Entity, Column, ManyToOne, JoinColumn, BeforeInsert } from "typeorm";
import { BaseEntity } from "../reusable/baseEntity";
import { Role } from "./role";
import { addPrefix } from "../utils/generateUUID";

@Entity()
export class Volunteer extends BaseEntity {
  @Column()
  volunteer_id: number;

  @Column()
  password: string;

  @Column()
  role_id: string;

  @ManyToOne(() => Role, (role) => role.volunteers)
  @JoinColumn({ name: "role_id" })
  role: Role;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = addPrefix(this.id, "vol_");
  }
}
