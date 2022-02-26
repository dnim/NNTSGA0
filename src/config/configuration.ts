export default () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  jwt: {
    secret: process.env.JWT_SECRET || 'jwtSecretKey',
  },
  db: {
    host: process.env.DATABASE_HOST || 'localhost',
    name: process.env.DATABASE_NAME || 'dbpfa',
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'dbpsswrd',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5433,
  },
});
