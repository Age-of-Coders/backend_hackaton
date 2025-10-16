import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/modules/users/entities/user.entity";
import { Repository } from "typeorm";
import { initialData } from "./data/seed-data";
import { Diabetes } from "../diabetes/entities/diabetes.entity";


@Injectable()
export class SeedService {

  constructor(

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Diabetes)
    private readonly diabetesRepository: Repository<Diabetes>,
  ){}

  async runSeed(): Promise<string> {
    await this.deleteTables();
    await this.intertUsers();
    await this.insertDiabetes();

    return 'Seed executed';
  }

  private async deleteTables() {
    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
  }

  private async intertUsers(): Promise<User[]> {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach(user => {
      users.push(this.userRepository.create(user));
    });

    const dbUsers = await this.userRepository.save(users);

    return dbUsers;
  }

  private async insertDiabetes() {
    const seedDiabetes = initialData.diabetes;

    const diabetes: Diabetes[] = [];

    seedDiabetes.forEach(d => {
      diabetes.push(this.diabetesRepository.create(d));
    });

    const dbDiabetes = await this.diabetesRepository.save(diabetes);

    return dbDiabetes;

  }
}