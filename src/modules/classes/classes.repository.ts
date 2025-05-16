import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClassesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateClassDto) {
    const clas = await this.prisma.classes.create({
      data: {
        school: {
          connect: {
            id: createProfileDto.schoolId,
          },
        },
        subject: {
          connect: {
            id: createProfileDto.subjectId,
          },
        },
        createdBy: { connect: { id: createProfileDto.createdByd } },
      } as any as Prisma.ClassesCreateInput,
    });
    return clas;
  }

  findAll() {
    return this.prisma.classes.findMany({
      include: {
        school: true,
        subject: true,
        createdBy: {
          include: {
            upsUser: {
              include: {
                profile: true,
              },
            },
          },
        },
        approvedBy: true,
        registredBy: true,
        profile: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.classes.findUnique({ where: { id } });
  }

  async update(id: number, updateProfileDto: UpdateClassDto) {
    let updateData: Prisma.ClassesUpdateInput = {};
    if (updateProfileDto.approvedById) {
      const clas = await this.prisma.classes.findUnique({
        where: {
          id,
        },
      });
      const [userProfilesShools] =
        await this.prisma.usersProfilesSchools.findMany({
          where: {
            userId: updateProfileDto.approvedById,
            schoolId: clas?.schoolId,
          },
        });

      updateData = {
        approvedBy: { connect: { id: updateProfileDto.approvedById } },
        profile: { connect: { id: userProfilesShools?.profileId } },
        approvedAt: new Date(),
      };
    }
    if (updateProfileDto.registredById) {
      updateData = {
        ...updateData,
        registredBy: {
          connect: {
            id: updateProfileDto.registredById,
          },
        },
      };
    }

    return this.prisma.classes.update({
      data: {
        ...updateData,
      } as Prisma.ClassesUpdateInput,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.classes.delete({ where: { id } });
  }
}
