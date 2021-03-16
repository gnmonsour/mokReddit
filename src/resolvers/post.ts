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

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg('id') id: number,
    @Arg('title', () => String) title: string,
    @Ctx() { em }: ConnContext
  ): Promise<Post | null> {
    const currPost = await em.findOne(Post, { id });
    if (!currPost) return null;
    if (typeof title !== undefined) {
      currPost.title = title;
      await em.persistAndFlush(currPost);
    }
    return currPost;
  }

  @Mutation(() => Boolean)
  async deletePost(
    @Arg('id', () => Int) id: number,
    @Ctx() { em }: ConnContext
  ): Promise<boolean> {
    try {
      await em.nativeDelete(Post, { id });
      return true;
    } catch (error) {
      return false;
    }
  }
}
