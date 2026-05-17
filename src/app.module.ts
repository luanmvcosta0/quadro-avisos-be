import { Module } from '@nestjs/common';
import { NoticeBoardModule } from './modules/notice-board/notice.module';

@Module({
  imports: [NoticeBoardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
