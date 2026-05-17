import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoticeEntity } from './entities/notice.entity';
import { CreateNoticeDto } from './dtos/create-notice.dto';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(NoticeEntity)
    private readonly noticeRepository: Repository<NoticeEntity>,
  ) {}

  createNotice(dto: CreateNoticeDto): Promise<NoticeEntity> {
    return this.noticeRepository.save(dto);
  }

  findNotice() {
    return this.noticeRepository.find();
  }
}
