import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Volunteer } from "./volunteer";

@Entity()
export class Role {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: number;

  @OneToMany(() => Volunteer, (volunteer) => volunteer.role)
  @JoinColumn({ name: "id", referencedColumnName: "role_id" })
  volunteers: Volunteer[];
}
