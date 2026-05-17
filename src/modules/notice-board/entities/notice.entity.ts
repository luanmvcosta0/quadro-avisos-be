import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'notice-board' })
export class NoticeEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'category', nullable: false })
  category: string;

  @Column({ name: 'description', nullable: false })
  description: string;
}
