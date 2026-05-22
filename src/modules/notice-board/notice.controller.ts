import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNoticeDto } from './dtos/create-notice.dto';
import { NoticeService } from './notice.service';
import { NoticeEntity } from './entities/notice.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateNoticeDto } from './dtos/update-notice.dto';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @ApiOperation({
    summary: 'Criar novo aviso',
    description: 'Criação de novos avisos',
  })
  @ApiResponse({ status: 201, description: 'Aviso criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Pedido inválido' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
  @Post('/')
  createNotice(@Body() dto: CreateNoticeDto): Promise<NoticeEntity> {
    return this.noticeService.createNotice(dto);
  }

  @ApiOperation({
    summary: 'Buscar um aviso',
    description: 'Busca de apenas um aviso',
  })
  @ApiResponse({
    status: 200,
    description: 'Aviso retornado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Aviso não encontrado',
  })
  @Get('/')
  findNotice() {
    return this.noticeService.findNotice();
  }

  @Patch(':id')
  updateNotice(@Param('id') id: number, @Body() dto: UpdateNoticeDto) {
    return this.noticeService.updateNotice(id, dto);
  }
}
