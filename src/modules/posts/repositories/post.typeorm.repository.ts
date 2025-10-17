import { Injectable } from "@nestjs/common";
import { IPostRepository } from "./post.repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "../entities/post.entity";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { PostLike } from "../entities/post-like.entity";


@Injectable()
export class PostTypeOrmRepository implements IPostRepository {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
    @InjectRepository(PostLike)
    private postLikeRepository: Repository<PostLike>,
  ){}

  async create(data: CreatePostDto): Promise<Post> {
    const post = this.repository.create(data);
    return this.repository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.repository.find({
      relations: ['postLikes'],
    });
  }
  
  async findById(id: string): Promise<Post | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['postLikes', 'postLikes.user'],
    });
  }
  
  async update(id: string, data: UpdatePostDto): Promise<Post | null> {
    await this.repository.update(id, data);
    return this.repository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async addLike(id: string, userId: string): Promise<Post | null> {

    const post = await this.repository.findOne({
      where: { id },
    });
    
    if (!post) return null;

    const existingLike = await this.postLikeRepository.findOne({
      where: { 
        post: { id },
        user: { id: userId }
      }
    });

    if (existingLike) {
      return this.findById(id);
    }

    const like = this.postLikeRepository.create({
      post: { id } as Post,
      user: { id: userId } as any,
    });

    await this.postLikeRepository.save(like);

    await this.repository.increment({ id }, 'likesCount', 1);

    return this.findById(id);
  }

  async removeLike(id: string, userId: string): Promise<Post | null> {
    const post = await this.repository.findOne({
      where: { id },
    });
    
    if (!post) return null;

    const existingLike = await this.postLikeRepository.findOne({
      where: { 
        post: { id },
        user: { id: userId }
      }
    });


    if (!existingLike) {
      return this.findById(id);
    }


    await this.postLikeRepository.remove(existingLike);

    if (post.likesCount > 0) {
      await this.repository.decrement({ id }, 'likesCount', 1);
    }

    return this.findById(id);
  }
  
}