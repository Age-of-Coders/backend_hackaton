import { Inject, Injectable } from '@nestjs/common';
import { CreateNotifyDto } from './dto/create-notify.dto';
import { INotifyRepository } from './repositories/notify.repository.interface';

@Injectable()
export class NotifiesService {

  constructor(
    @Inject('INotifyRepository')
    private readonly notifyRepository: INotifyRepository
  ) {}

  create(createNotifyDto: CreateNotifyDto) {
    return this.notifyRepository.send(createNotifyDto);
  }

  findAll() {
    return this.notifyRepository.findAll();
  }

  findOne(id: string) {
    return this.notifyRepository.findById(id)
  }

  validate(id: string) {
    return this.notifyRepository.validate(id);
  }

  remove(id: string) {
    return this.notifyRepository.reject(id);
  }
}
