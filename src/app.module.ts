import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user/user.entity';
import { Account } from './account/account.entity';
import { UsersController } from './user/users.controller';
import { UsersService } from './users/users.service';

const conf = configuration();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: conf.db.host,
      port: conf.db.port,
      username: conf.db.username,
      password: conf.db.password,
      database: conf.db.name,
      entities: [User, Account],
      synchronize: true,
      verboseRetryLog: true,
    }),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
    console.log({ connection });
  }
}
