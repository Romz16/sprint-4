import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("coordinates")
class Coordinate {
  @PrimaryColumn()
  id: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Coordinate };