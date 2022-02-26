import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Account } from '../account/account.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int' })
  accessLevel: number;

  @OneToOne(() => Account) // type =>
  @JoinColumn()
  relatedAccount: Account;
}
