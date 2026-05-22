import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateNoticeDto {
  @ApiProperty({
    description: 'Titulo do aviso',
    example: 'Manutenção no Sistema',
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 30, {
    message: 'O titulo deve ter no mínimo 3 e máximo 30 caracteres',
  })
  title: string;

  @ApiProperty({ description: 'Categoria do aviso', example: 'Comunicado' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 15, {
    message: 'A categoria deve ter no mínimo 3 e máximo 15 caracteres',
  })
  category: string;

  @ApiProperty({
    description: 'Descrição do aviso',
    example:
      'O sistema ficará indisponível neste sábado das 22h às 00h para atualização e melhorias de desempenho.',
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 500, {
    message: 'A mensagem deve ter no mínimo 3 e máximo 500 caracteres',
  })
  description: string;
}
