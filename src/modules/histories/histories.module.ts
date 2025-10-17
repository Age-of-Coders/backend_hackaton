
import { Module } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { HistoriesController } from './histories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entities/histories.entity';
import { PassportModule } from '@nestjs/passport';
import { HistoryLike } from './entities/history-like.entity';
import { UsersModule } from '../users/users.module';
import { HistoryTypeOrmRepository } from './repositories/history.typeorm.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([History, HistoryLike]),
    UsersModule,

  ],
  controllers: [HistoriesController],
  providers: [HistoriesService, HistoryTypeOrmRepository],
})
export class HistoriesModule {}
