import { Injectable, Inject } from '@nestjs/common';
import { HistoryTypeOrmRepository } from './repositories/history.typeorm.repository';
import { History } from './entities/histories.entity';
import { Repository } from 'typeorm';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { FavoriteHistoryTypeOrmRepository } from './repositories/favorite-history.typeorm.repository';

@Injectable()
export class HistoriesService {
  constructor(
    @Inject(HistoryTypeOrmRepository)
    private readonly historyRepository: HistoryTypeOrmRepository,
    private readonly favoriteHistoryRepository: FavoriteHistoryTypeOrmRepository,
  ) {}

  findAllSimple() {
    return this.historyRepository.findAllSimple();
  }

  addLike(historyId: string, userId: string) {
    return this.historyRepository.addLike(historyId, userId);
  }

  removeLike(historyId: string, userId: string) {
    return this.historyRepository.removeLike(historyId, userId);
  }

  addFavorite(userId: string, historyId: string) {
    return this.favoriteHistoryRepository.addFavorite(userId, historyId);
  }

  removeFavorite(userId: string, historyId: string) {
    return this.favoriteHistoryRepository.removeFavorite(userId, historyId);
  }

  listFavorites(userId: string) {
    return this.favoriteHistoryRepository.listFavorites(userId);
  }
}
