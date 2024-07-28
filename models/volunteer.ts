import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../reusable/baseEntity";
import { Role } from "./role";

@Entity()
export class Volunteer extends BaseEntity {
  @Column()
  volunteer_id: number;

  @Column()
  password: string;

  @Column()
  role_id: number;

  @ManyToOne(() => Role, (role) => role.volunteers)
  @JoinColumn({ name: "role_id" })
  role: Role;
}
