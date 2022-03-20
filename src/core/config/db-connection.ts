import 'reflect-metadata';
import { createConnection } from 'typeorm';
import path from 'path';

console.log(path.resolve(__dirname, '../../products/entities/**/*.js'));

export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tavo1798',
    database: 'test',
    entities: [
      path.resolve(__dirname, '../../products/entities/**/*.js')
    ],
    synchronize: true,
});
