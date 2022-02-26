import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Account } from '../account/account.entity';
import { Role } from '../role/role.entity';
import { User } from '../user/user.entity';

@Entity()
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User) // type =>
  @JoinColumn()
  relatedUser: User;

  @OneToOne(() => Account) // type =>
  @JoinColumn()
  relatedAccount: Account;

  @OneToOne(() => Role) // type =>
  @JoinColumn()
  relatedRole: Role;

  @Column()
  accountEmailAddress: string;

  @Column()
  accountPhoneNumber: string;

  @Column()
  accountFax: string;
}
