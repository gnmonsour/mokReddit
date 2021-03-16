import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

export default {
  dbName: 'mokreddit',
  port: 5433,
  entities: [Post],
  type: 'postgresql',
  user: 'gnm',
  password: 'gnmRoot',
  debug: !__prod__,
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
} as Parameters<typeof MikroORM.init>[0];
