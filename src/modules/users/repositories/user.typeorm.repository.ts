import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { IUserRepository } from "./user.repository.interface";
import { CreateUserDto, UpdateUserDto } from "../dtos";
import { Bcrypt } from "src/common/utils/adapters/helpers/bcrypt.helper";


@Injectable()
export class UserTypeOrmRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
    private readonly bcrypt: Bcrypt,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = this.repository.create(data);
    user.password = await this.bcrypt.hash(data.password)
    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }

  async update(id: string, data: UpdateUserDto): Promise<User | null> {
    if (data.password) data.password = await this.bcrypt.hash(data.password);
    await this.repository.update(id, data);
    return this.repository.findOneBy({ id });
  }
  
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}