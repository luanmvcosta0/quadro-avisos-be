import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoticeEntity } from './entities/notice.entity';
import { CreateNoticeDto } from './dtos/create-notice.dto';
import { UpdateNoticeDto } from './dtos/update-notice.dto';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(NoticeEntity)
    private readonly noticeRepository: Repository<NoticeEntity>,
  ) {}

  createNotice(dto: CreateNoticeDto): Promise<NoticeEntity> {
    return this.noticeRepository.save(dto);
  }

  findAllNotices() {
    return this.noticeRepository.find();
  }

  async findOneNotice(id: number) {
    const notice = await this.noticeRepository.findOneBy({ id });

    if (!notice) {
      throw new NotFoundException(`Aviso ${id} não encontrado`);
    }

    return notice;
  }

  async updateNotice(id: number, dto: UpdateNoticeDto) {
    const notice = await this.findOneNotice(id);

    if (!notice) {
      throw new NotFoundException();
    }

    Object.assign(notice, dto);

    return this.noticeRepository.save(notice);
  }
}
