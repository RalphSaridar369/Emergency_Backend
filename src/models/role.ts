import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  BeforeInsert,
} from "typeorm";
import { Volunteer } from "./volunteer";
import { addPrefix } from "../utils/generateUUID";

@Entity()
export class Role {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: number;

  @OneToMany(() => Volunteer, (volunteer) => volunteer.role)
  @JoinColumn({ name: "id", referencedColumnName: "role_id" })
  volunteers: Volunteer[];

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = addPrefix(this.id, "role_");
  }
}
