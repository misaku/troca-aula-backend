import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SchoolsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProfileDto: CreateSchoolDto) {
    const subject = await this.prisma.schools.create({
      data: { ...createProfileDto } as Prisma.SchoolsCreateInput,
    });
    return subject;
  }

  findAll() {
    return this.prisma.schools.findMany();
  }

  findOne(id: number) {
    return this.prisma.schools.findUnique({ where: { id } });
  }

  update(id: number, updateProfileDto: UpdateSchoolDto) {
    return this.prisma.schools.update({
      data: updateProfileDto as Prisma.SchoolsUpdateInput,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.schools.delete({ where: { id } });
  }
}
