import { Repository } from 'typeorm';
import { NoticeBoardEntity } from './entities/notice-board.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NoticeBoardService {
  constructor(
    @InjectRepository(NoticeBoardEntity)
    private readonly noticeBoardRepository: Repository<NoticeBoardEntity>,
  ) {}

  createNotice() {}

  findNotice() {}
}
