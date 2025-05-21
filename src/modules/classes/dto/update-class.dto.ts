import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateClassDto } from './create-class.dto';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  registredById?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  approvedById?: number;
}
