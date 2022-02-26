export default {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'dbpsswrd',
  database: 'dbpfa',
  migrationsTableName: '_migration',
  entities: ['**/*.entity{.ts,.js}'],
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
};
