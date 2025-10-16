import { Injectable } from "@nestjs/common";
import { Profile } from '../entities/profile.entity';
import { IProfileRepository } from "./profile.repository.interface";
import { CreateProfileDto } from "../dto/create-profile.dto";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class ProfileTypeOrmRepository implements IProfileRepository {

  constructor(
    @InjectRepository(Profile)
    private repository: Repository<Profile>,
  ) {}

  async findById(id: string): Promise<Profile | null> {
    return await this.repository.findOneBy({ id });
  }

  async create(data: CreateProfileDto): Promise<Profile> {
    const profile = this.repository.create({
      firstName: data.firstName,
      lastname: data.lastName,
      age: data.age,
      experience: data.experience,
      user: { id: data.userId } as any,
      diabetes_types: { id: data.diabetesTypesId } as any,
    });
    return await this.repository.save(profile);
  }

  async update(id: string, data: UpdateProfileDto): Promise<Profile | null> {
    const updateData: Partial<Profile> = {};
    if (data.firstName !== undefined) updateData.firstName = data.firstName;
    if (data.lastName !== undefined) updateData.lastname = data.lastName;
    if (data.age !== undefined) updateData.age = data.age;
    if (data.experience !== undefined) updateData.experience = data.experience;
    await this.repository.update(id, updateData);
    return this.repository.findOneBy({ id });
  }
}