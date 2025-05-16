import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
}
