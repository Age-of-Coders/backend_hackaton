import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteHistory } from '../entities/favorite-history.entity';
import { History } from '../entities/histories.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class FavoriteHistoryTypeOrmRepository {
  constructor(
    @InjectRepository(FavoriteHistory)
    private readonly favoriteHistoryRepository: Repository<FavoriteHistory>,
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async addFavorite(userId: string, historyId: string): Promise<FavoriteHistory | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const history = await this.historyRepository.findOne({ where: { id: historyId } });
    if (!user || !history) return null;
    const existing = await this.favoriteHistoryRepository.findOne({ where: { user: { id: userId }, history: { id: historyId } } });
    if (existing) return existing;
    const favorite = this.favoriteHistoryRepository.create({ user, history });
    return this.favoriteHistoryRepository.save(favorite);
  }

  async removeFavorite(userId: string, historyId: string): Promise<boolean> {
    const favorite = await this.favoriteHistoryRepository.findOne({ where: { user: { id: userId }, history: { id: historyId } } });
    if (!favorite) return false;
    await this.favoriteHistoryRepository.remove(favorite);
    return true;
  }

  async listFavorites(userId: string): Promise<FavoriteHistory[]> {
    return this.favoriteHistoryRepository.find({ where: { user: { id: userId } }, relations: ['history'] });
  }
}
