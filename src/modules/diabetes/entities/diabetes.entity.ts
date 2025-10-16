import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('diabetes_types')
export class Diabetes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  type: string;

  @Column('text')
  description: string;
}