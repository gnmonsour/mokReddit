import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';

const cc = console.log;

const main = async () => {
  const orm = await MikroORM.init({
    dbName: 'mokreddit',
    user: 'gnm',
    debug: !__prod__,
    type: 'postgresql',
  });
};

main();

cc('hello george, are we in grok state?');
cc('yes we are');
