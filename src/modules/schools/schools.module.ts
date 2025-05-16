import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { SchoolsRepository } from './schools.repository';

@Module({
  controllers: [SchoolsController],
  providers: [SchoolsRepository, SchoolsService],
})
export class SchoolsModule {}
