import { User } from "src/modules/users/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { History } from "./histories.entity";

@Entity('history_likes')
export class HistoryLike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => History, history => history.historyLikes, { onDelete: 'CASCADE' })
  history: History;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
