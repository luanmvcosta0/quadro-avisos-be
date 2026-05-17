import { Module } from '@nestjs/common';
import { NoticeBoardController } from './notice-board.controller';
import { NoticeBoardService } from './notice-board.service';

@Module({
  imports: [],
  controllers: [NoticeBoardController],
  providers: [NoticeBoardService],
})
export class NoticeBoardModule {}
