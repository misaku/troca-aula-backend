import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolsRepository } from './schools.repository';

@Injectable()
export class SchoolsService {
  constructor(private readonly schoolsRepository: SchoolsRepository) {}
  create(createSchoolDto: CreateSchoolDto) {
    return this.schoolsRepository.create(createSchoolDto);
  }

  findAll() {
    return this.schoolsRepository.findAll();
  }

  findOne(id: number) {
    return this.schoolsRepository.findOne(id);
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsRepository.update(id, updateSchoolDto);
  }

  remove(id: number) {
    return this.schoolsRepository.remove(id);
  }
}
