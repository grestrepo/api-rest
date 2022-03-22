import 'reflect-metadata';
import { createConnection } from 'typeorm';
import path from 'path';

import {config} from './config';

export const connection = createConnection({
    type: 'postgres',
    host: config.host,
    port: 5432,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    entities: [
      path.resolve(__dirname, '../../products/entities/**/*.js'),
      path.resolve(__dirname, '../../users/entities/**/*.js')
    ],
    migrations: [/*...*/],
    migrationsTableName: "custom_migration_table",
    synchronize: true
});
