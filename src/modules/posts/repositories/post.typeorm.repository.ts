import { Injectable } from "@nestjs/common";
import { IPostRepository } from "./post.repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "../entities/post.entity";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";


@Injectable()
export class PostTypeOrmRepository implements IPostRepository {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
  ){}

  async create(data: CreatePostDto): Promise<Post> {
    const post = this.repository.create(data);
    return this.repository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.repository.find();
  }
  async findById(id: string): Promise<Post | null> {
    return await this.repository.findOneBy({ id });
  }
  async update(id: string, data: UpdatePostDto): Promise<Post | null> {
    await this.repository.update(id, data);
    return this.repository.findOneBy({ id });
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  
}