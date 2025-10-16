import { CreateNotifyDto } from "../dto/create-notify.dto";
import { Notify } from "../entities/notify.entity";

export interface INotifyRepository {
  send(data: CreateNotifyDto): Promise<Notify>;
  findById(id: string): Promise<Notify | null>;
  findAll(): Promise<Notify[]>;
  validate(id: string): Promise<boolean>,
  reject(id: string): Promise<void>;
}