import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNoticeBoardDto } from './dtos/create-notice-board.dto';
import { NoticeBoardService } from './notice-board.service';

@Controller('notice-board')
export class NoticeBoardController {
  constructor(private readonly noticeBoardService: NoticeBoardService) {}

  @Post('/')
  createNotice(@Body() dto: CreateNoticeBoardDto) {
    return this.noticeBoardService.createNotice(dto);
  }

  @Get('/')
  findNotice() {
    return 'Notice created';
  }
}
