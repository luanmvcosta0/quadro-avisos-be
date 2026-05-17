import { Module } from '@nestjs/common';
import { NoticeBoardController } from './notice-board.controller';
import { NoticeBoardService } from './notice-board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeBoardEntity } from './entities/notice-board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeBoardEntity])],
  controllers: [NoticeBoardController],
  providers: [NoticeBoardService],
})
export class NoticeBoardModule {}
