import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
    summary: 'Busca avisos ativos',
    description: 'Lista todos os avisos ativos',
  })
  @ApiResponse({
    status: 200,
    description: 'Avisos retornados com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Avisos não encontrados',
  })
  @Get('/')
  findAllNotices() {
    return this.noticeService.findAllNotices();
  }

  @ApiOperation({
    summary: 'Busca apenas um aviso',
    description: 'Lista um aviso passado pelo id',
  })
  @ApiResponse({ status: 200, description: 'Aviso retornado com sucesso' })
  @ApiResponse({ status: 404, description: 'Aviso não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
  @Get(':id')
  async findOneNotice(@Param('id') id: number) {
    return this.noticeService.findOneNotice(id);
  }

  @ApiOperation({
    summary: 'Atualiza um aviso',
    description: 'Atualiza um aviso passado pelo id',
  })
  @ApiResponse({ status: 200, description: 'Aviso atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Aviso não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
  @Patch(':id')
  updateNotice(@Param('id') id: number, @Body() dto: UpdateNoticeDto) {
    return this.noticeService.updateNotice(id, dto);
  }

  @ApiOperation({
    summary: 'Remove um aviso',
    description: 'Remove um aviso passado pelo id',
  })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Aviso não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
  @Delete(':id')
  async removeNotice(@Param('id') id: number) {
    await this.noticeService.removeNotice(id);
  }
}
