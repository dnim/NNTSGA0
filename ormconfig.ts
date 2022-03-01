import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import configuration from './src/config/configuration';

const conf = configuration();

export default {
  name: 'default',
  type: 'postgres',
  host: conf.db.host,
  port: conf.db.port,
  username: conf.db.username,
  password: conf.db.password,
  database: conf.db.name,
  entities: ['dist/**/*.entity.js'],
  migrationsTableName: '_migration',
  migrations: ['dist/migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
  retryAttempts: 3,
  // synchronize: true,
  verboseRetryLog: true,
} as TypeOrmModuleOptions;
