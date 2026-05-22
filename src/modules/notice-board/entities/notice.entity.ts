import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'notice-board' })
export class NoticeEntity {
  @ApiProperty({ description: 'Id do aviso', example: '1' })
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @ApiProperty({
    description: 'Titulo do aviso',
    example: 'Manutenção no Sistema',
  })
  @Column({ name: 'title', nullable: false })
  title: string;

  @ApiProperty({ description: 'Categoria do aviso', example: 'Comunicado' })
  @ApiProperty({ description: 'id do aviso', example: '1' })
  @Column({ name: 'category', nullable: false })
  category: string;

  @ApiProperty({
    description: 'Descrição do aviso',
    example:
      'O sistema ficará indisponível neste sábado das 22h às 00h para atualização e melhorias de desempenho.',
  })
  @ApiProperty({ description: 'id do aviso', example: '1' })
  @Column({ name: 'description', nullable: false })
  description: string;
}
