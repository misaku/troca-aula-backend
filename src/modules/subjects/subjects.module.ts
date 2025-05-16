import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { SubjectRepository } from './subjects.repository';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectRepository, SubjectsService],
})
export class SubjectsModule {}
