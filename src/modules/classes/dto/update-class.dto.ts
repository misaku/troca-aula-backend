import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClassDto } from './create-class.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  registredById?: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  approvedById?: number;
}
