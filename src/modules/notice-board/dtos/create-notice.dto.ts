import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateNoticeDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 15)
  category: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 500)
  description: string;
}
