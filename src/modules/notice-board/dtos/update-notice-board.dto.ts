import { PartialType } from '@nestjs/mapped-types';
import { CreateNoticeBoardDto } from './create-notice-board.dto';

export class UpdateNoticeBoardDto extends PartialType(CreateNoticeBoardDto) {}
