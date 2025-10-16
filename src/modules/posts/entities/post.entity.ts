import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts_medics')
export class Post {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  text: string;

  @Column('int', { default: 0 })
  likes: number;

  @ManyToOne(() => User, user => user.posts)
  userId: string;
}
