import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Account } from '../account/account.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  emailAddress: string;

  @Column()
  passwordSalt: string;

  @Column()
  passwordHash: string;

  @OneToOne(() => Account) // type =>
  @JoinColumn()
  relatedAccount: Account;

  @Column({ default: true })
  isActive: boolean;
}
