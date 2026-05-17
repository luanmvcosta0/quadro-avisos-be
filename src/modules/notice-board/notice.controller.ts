import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNoticeDto } from './dtos/create-notice.dto';
import { NoticeService } from './notice.service';

@Controller('notice-board')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post('/')
  createNotice(@Body() dto: CreateNoticeDto) {
    return this.noticeService.createNotice(dto);
  }

  @Get('/')
  findNotice() {
    return 'Notice created';
  }
}
