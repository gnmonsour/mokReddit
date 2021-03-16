import { Post } from '../entities/Post';
import { ConnContext } from 'src/types';
import { Ctx, Query, Resolver } from 'type-graphql';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: ConnContext): Promise<Post[]> {
    return em.find(Post, {});
  }
}
