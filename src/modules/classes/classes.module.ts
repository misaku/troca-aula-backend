import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { ClassesRepository } from './classes.repository';

@Module({
  controllers: [ClassesController],
  providers: [ClassesRepository, ClassesService],
})
export class ClassesModule {}
