
import { Module } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { HistoriesController } from './histories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entities/histories.entity';
import { PassportModule } from '@nestjs/passport';
import { HistoryLike } from './entities/history-like.entity';
import { UsersModule } from '../users/users.module';
import { HistoryTypeOrmRepository } from './repositories/history.typeorm.repository';
import { FavoriteHistory } from './entities/favorite-history.entity';
import { FavoriteHistoryTypeOrmRepository } from './repositories/favorite-history.typeorm.repository';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([History, HistoryLike, FavoriteHistory, User]),
    UsersModule,
  ],
  controllers: [HistoriesController],
  providers: [HistoriesService, HistoryTypeOrmRepository, FavoriteHistoryTypeOrmRepository],
})
export class HistoriesModule {}
