import { Post } from '../entities/Post';
import { ConnContext } from 'src/types';
import { Arg, Ctx, Int, Query, Resolver } from 'type-graphql';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: ConnContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(
    @Arg('id', () => Int) id: number,
    @Ctx() { em }: ConnContext
  ): Promise<Post | null> {
    return em.findOne(Post, { id });
  }
}
