import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { NavigationSection } from '@/features/post/NavigationSection'
import { Post } from '@/features/post/Post'
import { PostsLikes } from '@/features/post/PostsLikes'

interface PostWithLikesProps {
  postId: any
}

export const PostWithLikes = ({ postId }: PostWithLikesProps) => {
  return (
    <div>
      <Post postId={postId} />
      <NavigationSection postId={postId} section="likes" />
      <PostsLikes postId={postId} />
    </div>
  )
}

const Page: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Nine - Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PostWithLikes postId={id} />
      </main>
    </>
  )
}

export default Page
