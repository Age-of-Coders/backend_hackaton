import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity('historias_usuarios')
export class History {
  @PrimaryColumn('int8')
  id: string;

  // @CreateDateColumn()
  // created_at: Date;

  // @Column('text')
  // texto_historia: string;

  // @Column('text')
  // etiquetas_o_tags: string;

  // @Column('int4', { default: 0 })
  // likes: number;
}