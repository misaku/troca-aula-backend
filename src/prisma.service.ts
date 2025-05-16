import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();

    // 🧠 Adiciona o middleware no construtor
    const SOFT_DELETE_MODELS = new Set([
      'Users',
      'Subjects',
      'Schools',
      'Classes',
    ]);

    this.$use(async (params, next) => {
      const model = params.model || '';

      const isSoftDeleteModel = SOFT_DELETE_MODELS.has(model);
      console.log({ args: params.args, action: params.action, model });
      if (
        isSoftDeleteModel &&
        ['findUnique', 'findMany', 'findFirst'].includes(params.action)
      ) {
        params.args = {
          ...params.args,
          where: {
            ...params.args?.where,
            deletedAt: null,
          },
        };
      }

      if (isSoftDeleteModel && params.action === 'delete') {
        params.action = 'update';
        params.args = {
          ...params.args,
          data: {
            deletedAt: new Date(),
          },
        };
      }

      if (isSoftDeleteModel && params.action === 'deleteMany') {
        params.action = 'updateMany';
        params.args = {
          ...params.args,
          data: {
            ...params.args?.data,
            deletedAt: new Date(),
          },
        };
      }

      return next(params);
    });
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
