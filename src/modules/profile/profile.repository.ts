import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProfileDto: CreateProfileDto) {
    const profile = await this.prisma.profiles.create({
      data: { ...createProfileDto } as Prisma.ProfilesCreateInput,
    });
    return profile;
  }

  findAll() {
    return this.prisma.profiles.findMany();
  }

  findOne(id: number) {
    return this.prisma.profiles.findUnique({ where: { id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profiles.update({
      data: updateProfileDto as Prisma.ProfilesUpdateInput,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.profiles.delete({ where: { id } });
  }
}
