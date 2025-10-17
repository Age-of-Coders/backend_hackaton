import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoritePost } from '../entities/favorite-post.entity';
import { Post } from '../entities/post.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class FavoritePostTypeOrmRepository {
  constructor(
    @InjectRepository(FavoritePost)
    private readonly favoritePostRepository: Repository<FavoritePost>,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async addFavorite(userId: string, postId: string): Promise<FavoritePost | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const post = await this.postRepository.findOne({ where: { id: postId } });
    if (!user || !post) return null;
    const existing = await this.favoritePostRepository.findOne({ where: { user: { id: userId }, post: { id: postId } } });
    if (existing) return existing;
    const favorite = this.favoritePostRepository.create({ user, post });
    return this.favoritePostRepository.save(favorite);
  }

  async removeFavorite(userId: string, postId: string): Promise<boolean> {
    const favorite = await this.favoritePostRepository.findOne({ where: { user: { id: userId }, post: { id: postId } } });
    if (!favorite) return false;
    await this.favoritePostRepository.remove(favorite);
    return true;
  }

  async listFavorites(userId: string): Promise<FavoritePost[]> {
    return this.favoritePostRepository.find({ where: { user: { id: userId } }, relations: ['post'] });
  }
}
