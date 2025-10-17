import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Notify } from "../entities/notify.entity";
import { Repository } from 'typeorm';
import { INotifyRepository } from "./notify.repository.interface";
import { CreateNotifyDto } from "../dto/create-notify.dto";
import { User } from "src/modules/users/entities/user.entity";


@Injectable()
export class NotifyTypeOrmRepository implements INotifyRepository {

  constructor(
    @InjectRepository(Notify)
    private readonly repository: Repository<Notify>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async send(data: CreateNotifyDto): Promise<Notify> {
    const notify = this.repository.create({
      certificateImageUrl: data.certificateImageUrl,
      user: { id: data.userId } as any,
    });
    return await this.repository.save(notify);
  }
  async findById(id: string): Promise<Notify | null> {
    const notify = await this.repository.findOneBy({ id });
    return notify;
  }
  async validate(id: string): Promise<boolean> {
    const notify = await this.repository.findOne({ 
      where: { id },
      relations: ['user']
    });

    if (!notify || !notify.user) return false;

    await this.repository.update(id, { isVerified: true });

    await this.userRepository.update(notify.user.id, { isMedic: true });

    await this.repository.delete({ id });

    return true;
  }
  async findAll(): Promise<Notify[]> {
    return await this.repository.find();
  }
  async reject(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}