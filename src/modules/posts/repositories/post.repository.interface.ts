import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { Post } from "../entities/post.entity";


export interface IPostRepository {
  create(data: CreatePostDto): Promise<Post>;
  findAll(): Promise<Post[]>;
  findById(id: string): Promise<Post | null>;
  update(id: string, data: UpdatePostDto): Promise<Post | null>;
  delete(id: string): Promise<void>;
  addLike(id: string, userId: string): Promise<Post | null>;
  removeLike(id: string, userId: string): Promise<Post | null>;
}