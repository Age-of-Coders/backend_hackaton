import { Inject, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { IProfileRepository } from './repositories/profile.repository.interface';

@Injectable()
export class ProfilesService {

  constructor(
    @Inject('IProfileRepository')
    private readonly profileRepository: IProfileRepository,
  ) {}

  findOne(id: string) {
    return this.profileRepository.findById(id);
  }

  create(createProfileDto: CreateProfileDto) {
    return this.profileRepository.create(createProfileDto);
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.profileRepository.update(id, updateProfileDto);
  }

}
