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
  entities: ['**/*.entity{.ts,.js}'],
  migrationsTableName: '_migration',
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
  // synchronize: true,
  verboseRetryLog: true,
} as TypeOrmModuleOptions;
