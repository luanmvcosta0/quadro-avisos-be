import { Module } from '@nestjs/common';
import { NoticeBoardModule } from './modules/notice-board/notice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeEntity } from './modules/notice-board/entities/notice.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [NoticeEntity],
      synchronize: true,
    }),
    NoticeBoardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
