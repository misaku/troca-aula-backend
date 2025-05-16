import { ProfileEnum } from '../../profile/profile.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ProfileEnum, {
    message:
      'Perfil deve ser um valor entre 1 e 3 (DIRETOR, AUXILIAR_ADM ou PROFESSOR)',
  })
  @Type(() => Number)
  profileId: ProfileEnum;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  schoolId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}
