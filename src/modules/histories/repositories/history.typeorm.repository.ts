import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { History } from "../entities/histories.entity";
import { HistoryLike } from "../entities/history-like.entity";
import { User } from "src/modules/users/entities/user.entity";

@Injectable()
export class HistoryTypeOrmRepository {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(HistoryLike)
    private readonly historyLikeRepository: Repository<HistoryLike>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAllSimple(): Promise<{ id: string; created_at: Date; texto_historia: string; likes: number }[]> {
    return await this.historyRepository.find({
      select: ['id', 'created_at', 'texto_historia', 'likes'],
      order: { created_at: 'DESC' }
    });
  }

  async addLike(historyId: string, userId: string): Promise<History | null> {
    const history = await this.historyRepository.findOne({ where: { id: historyId } });
    if (!history) return null;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) return null;

    const existingLike = await this.historyLikeRepository.findOne({
      where: {
        history: { id: historyId },
        user: { id: userId }
      }
    });
    if (existingLike) {
      return this.historyRepository.findOne({
        where: { id: historyId },
        relations: ['historyLikes', 'historyLikes.user']
      });
    }

    const like = this.historyLikeRepository.create({
      history,
      user,
    });
    await this.historyLikeRepository.save(like);
    await this.historyRepository.increment({ id: historyId }, 'likes', 1);
    return this.historyRepository.findOne({
      where: { id: historyId },
      relations: ['historyLikes', 'historyLikes.user']
    });
  }

  async removeLike(historyId: string, userId: string): Promise<History | null> {
    const history = await this.historyRepository.findOne({ where: { id: historyId } });
    if (!history) return null;

    const existingLike = await this.historyLikeRepository.findOne({
      where: {
        history: { id: historyId },
        user: { id: userId }
      }
    });
    if (!existingLike) {
      return this.historyRepository.findOne({
        where: { id: historyId },
        relations: ['historyLikes', 'historyLikes.user']
      });
    }

    await this.historyLikeRepository.remove(existingLike);
    await this.historyRepository.decrement({ id: historyId }, 'likes', 1);
    return this.historyRepository.findOne({
      where: { id: historyId },
      relations: ['historyLikes', 'historyLikes.user']
    });
  }
}
