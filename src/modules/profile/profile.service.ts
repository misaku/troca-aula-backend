import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(private readonly repository: ProfileRepository) {}
  create(createProfileDto: CreateProfileDto) {
    return this.repository.create(createProfileDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.repository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
