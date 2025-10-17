import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { HistoryLike } from "./history-like.entity";

@Entity('historias_usuarios')
export class History {
  @PrimaryColumn('int8')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column('text')
  texto_historia: string;

  @Column('json')
  etiquetas_o_tags: string;

  @Column('int8', { default: 0 })
  likes: number;

  @OneToMany(() => HistoryLike, historyLike => historyLike.history)
  historyLikes: HistoryLike[];
}