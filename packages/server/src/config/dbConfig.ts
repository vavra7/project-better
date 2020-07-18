import { ConnectionOptions } from 'typeorm';
import { entities } from '../entity';

export const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'project-better',
  username: 'user',
  password: 'pass',
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities
};
