import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostLike } from "./post-like.entity";

@Entity('posts_medics')
export class Post {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  text: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('int', { default: 0 })
  likesCount: number;

  @ManyToOne(() => User, user => user.posts)
  userId: string;

  @OneToMany(() => PostLike, postLike => postLike.post)
  postLikes: PostLike[];
}
