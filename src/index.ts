import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const cc = console.log;

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, { title: 'mocking a post' });
  // await orm.em.persistAndFlush(post);
};

main()
  .then(() => {
    cc('hello george, are we in grok state?');
    cc('yes we are');
  })
  .catch((err) => cc(err));
