import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNoticeDto } from './dtos/create-notice.dto';
import { NoticeService } from './notice.service';
import { NoticeEntity } from './entities/notice.entity';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post('/')
  createNotice(@Body() dto: CreateNoticeDto): Promise<NoticeEntity> {
    return this.noticeService.createNotice(dto);
  }

  @Get('/')
  findNotice() {
    return 'Notice created';
  }
}
