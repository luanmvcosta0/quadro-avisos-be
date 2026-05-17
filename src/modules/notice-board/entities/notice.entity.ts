import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'notice-board' })
export class NoticeEntity {
  @PrimaryGeneratedColumn({ type: 'number', name: 'id' })
  id: number;

  @Column({ type: 'string', name: 'title' })
  title: string;

  @Column({ type: 'string', name: 'category' })
  category: string;

  @Column({ type: 'string', name: 'description' })
  description: string;

  @Column({ type: 'string', name: 'user' })
  user: string;
}
