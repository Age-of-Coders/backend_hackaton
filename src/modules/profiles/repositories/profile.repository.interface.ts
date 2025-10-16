import { CreateProfileDto } from "../dto/create-profile.dto";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { Profile } from "../entities/profile.entity";

export interface IProfileRepository {
  findById(id: string): Promise<Profile | null>;
  create(data: CreateProfileDto): Promise<Profile>;
  update(id: string, data: UpdateProfileDto): Promise<Profile | null>;
}