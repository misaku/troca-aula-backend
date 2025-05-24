import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassesRepository } from './classes.repository';
import { GetClassDto } from './dto/get-class.dto';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class ClassesService {
  constructor(
    private readonly repository: ClassesRepository,
    private readonly userRepository: UsersRepository,
  ) {}
  create(createClassDto: CreateClassDto) {
    return this.repository.create(createClassDto);
  }

  async findAll(params: GetClassDto) {
    let currentParams = params;
    if (params.userId) {
      const user = await this.userRepository.findOne(params.userId);
      if (user?.upsUser[0].profileId != 3) {
        currentParams = {
          schoolId: user?.upsUser[0].schoolId,
        };
      }
    }
    return this.repository.findAll(currentParams);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.repository.update(id, updateClassDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
