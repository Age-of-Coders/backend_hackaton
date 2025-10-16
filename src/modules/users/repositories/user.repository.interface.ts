import { CreateUserDto, UpdateUserDto } from "../dtos";
import { User } from "../entities/user.entity";

export interface IUserRepository {
  create(data: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, data: UpdateUserDto): Promise<User | null>;
  delete(id: string): Promise<void>;
}