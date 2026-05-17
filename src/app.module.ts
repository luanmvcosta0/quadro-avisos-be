import { Module } from '@nestjs/common';
import { NoticeBoardModule } from './modules/notice-board/notice-board.module';

@Module({
  imports: [NoticeBoardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
