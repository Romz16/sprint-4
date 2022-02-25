import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
} from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("coordinates")
class Coordinate {
  @PrimaryColumn()
  id: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

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