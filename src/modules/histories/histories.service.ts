import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './entities/histories.entity';
import { Repository } from 'typeorm';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Injectable()
export class HistoriesService {

  // constructor(
  //   @InjectRepository(History)
  //   private readonly historyRepository:Repository<History>,
  // ) {}

  // addLike(id: string,) {
  //   this.historyRepository.update(id);
  // }

  // substractLike(id: string) {
  //   this.historyRepository.update(id);
  // }

}
