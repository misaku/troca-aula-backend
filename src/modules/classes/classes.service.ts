import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassesRepository } from './classes.repository';

@Injectable()
export class ClassesService {
  constructor(private readonly repository: ClassesRepository) {}
  create(createClassDto: CreateClassDto) {
    return this.repository.create(createClassDto);
  }

  findAll() {
    return this.repository.findAll();
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
