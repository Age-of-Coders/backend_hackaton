import { Profile } from "src/modules/profiles/entities/profile.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('diabetes_types')
export class Diabetes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  type: string;

  @Column('text')
  description: string;

  @ManyToOne(() => Profile, profile => profile.diabetes_types)
  profiles: Profile[];
}