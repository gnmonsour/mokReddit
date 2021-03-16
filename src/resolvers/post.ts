import { Post } from '../entities/Post';
import { ConnContext } from 'src/types';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  getAllPosts(@Ctx() { em }: ConnContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  getPost(
    @Arg('id', () => Int) id: number,
    @Ctx() { em }: ConnContext
  ): Promise<Post | null> {
    return em.findOne(Post, { id });
  }

  @Mutation(() => Post)
  async createPost(
    @Arg('title', () => String) title: string,
    @Ctx() { em }: ConnContext
  ): Promise<Post> {
    const newPost = em.create(Post, { title });
    await em.persistAndFlush(newPost);
    return newPost;
  }
}
