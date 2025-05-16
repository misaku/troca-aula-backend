import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectRepository } from './subjects.repository';

@Injectable()
export class SubjectsService {
  constructor(private readonly repository: SubjectRepository) {}
  create(createSubjectDto: CreateSubjectDto) {
    return this.repository.create(createSubjectDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.repository.update(id, updateSubjectDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
