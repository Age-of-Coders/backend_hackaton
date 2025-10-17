import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { History } from './histories.entity';

@Entity('favorite_histories')
export class FavoriteHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => History, { onDelete: 'CASCADE' })
  history: History;

  @CreateDateColumn()
  createdAt: Date;
}
