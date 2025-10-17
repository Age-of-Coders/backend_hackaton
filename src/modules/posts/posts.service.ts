import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { IPostRepository } from './repositories/post.repository.interface';
import { FavoritePostTypeOrmRepository } from './repositories/favorite-post.typeorm.repository';

@Injectable()
export class PostsService {
  constructor(
    @Inject('IPostRepository')
    private readonly postRepository: IPostRepository,
    private readonly favoritePostRepository: FavoritePostTypeOrmRepository,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }

  findAll() {
    return this.postRepository.findAll();
  }

  findOne(id: string) {
    return this.postRepository.findById(id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: string) {
    return this.postRepository.delete(id);
  }

  addLike(postId: string, userId: string) {
    return this.postRepository.addLike(postId, userId);
  }

  removeLike(postId: string, userId: string) {
    return this.postRepository.removeLike(postId, userId);
  }

  addFavorite(userId: string, postId: string) {
    return this.favoritePostRepository.addFavorite(userId, postId);
  }

  removeFavorite(userId: string, postId: string) {
    return this.favoritePostRepository.removeFavorite(userId, postId);
  }

  listFavorites(userId: string) {
    return this.favoritePostRepository.listFavorites(userId);
  }
}
