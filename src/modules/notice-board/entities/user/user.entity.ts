import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'number', name: 'id' })
  id: number;

  @Column({ type: 'string', name: 'name' })
  name: string;

  @Column({ type: 'string', name: 'lastName' })
  lastName: string;

  @Column({ type: 'string', name: 'email' })
  email: string;
}
