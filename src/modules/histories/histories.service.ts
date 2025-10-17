import { Injectable, Inject } from '@nestjs/common';
import { HistoryTypeOrmRepository } from './repositories/history.typeorm.repository';
import { History } from './entities/histories.entity';
import { Repository } from 'typeorm';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Injectable()
export class HistoriesService {
  constructor(
    @Inject(HistoryTypeOrmRepository)
    private readonly historyRepository: HistoryTypeOrmRepository,
  ) {}

  addLike(historyId: string, userId: string) {
    return this.historyRepository.addLike(historyId, userId);
  }

  removeLike(historyId: string, userId: string) {
    return this.historyRepository.removeLike(historyId, userId);
  }
}
