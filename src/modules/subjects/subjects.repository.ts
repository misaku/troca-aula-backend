import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SubjectRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProfileDto: CreateSubjectDto) {
    const subject = await this.prisma.subjects.create({
      data: { ...createProfileDto } as Prisma.SubjectsCreateInput,
    });
    return subject;
  }

  findAll() {
    return this.prisma.subjects.findMany();
  }

  findOne(id: number) {
    return this.prisma.subjects.findUnique({ where: { id } });
  }

  update(id: number, updateProfileDto: UpdateSubjectDto) {
    return this.prisma.subjects.update({
      data: updateProfileDto as Prisma.SubjectsUpdateInput,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.subjects.delete({ where: { id } });
  }
}
