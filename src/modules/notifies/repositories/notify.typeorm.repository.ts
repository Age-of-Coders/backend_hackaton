import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Notify } from "../entities/notify.entity";
import { Repository } from 'typeorm';
import { INotifyRepository } from "./notify.repository.interface";
import { CreateNotifyDto } from "../dto/create-notify.dto";


@Injectable()
export class NotifyTypeOrmRepository implements INotifyRepository {

  constructor(
    @InjectRepository(Notify)
    private readonly repository: Repository<Notify>,
  ) {}

  async send(data: CreateNotifyDto): Promise<Notify> {
    const notify = this.repository.create(data);
    return await this.repository.save(notify);
  }
  async findById(id: string): Promise<Notify | null> {
    const notify = await this.repository.findOneBy({ id });
    return notify;
  }
  async validate(id: string): Promise<boolean> {
    await this.repository.update(id, { isVerified: true });

    return true;
  }
  async findAll(): Promise<Notify[]> {
    return await this.repository.find();
  }
  async reject(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}