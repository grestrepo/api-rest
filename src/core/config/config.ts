import dotenv from 'dotenv';

dotenv.config();

interface Config {
  env: string;
  port: string;
  host: string;
  dbName: string;
  dbUser: string;
  dbPassword: string;
}

export const config: Config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || '3000',
  host: 'localhost',
  dbName: process.env.DB_NAME || 'test2',
  dbUser: process.env.DB_USER || 'postgres2',
  dbPassword: process.env.DB_PASSWORD || '123456'
};
