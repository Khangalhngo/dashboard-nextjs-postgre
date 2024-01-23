import Link from 'next/link';
import { Post } from '@/components/page';
import prisma from '@/lib/prisma'

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts)
  return (
    <main >
      <Link href={'/add-post'}>Add Post</Link>
      <h1 className='text-red-500 md:text-blue-500 lg:text-green-500'>Feed</h1>
      {
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          )
        })
      }
    </main>
  )
}