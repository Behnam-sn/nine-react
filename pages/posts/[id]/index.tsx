import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { CreateComment } from '@/features/post/CreateComment'
import { NavigationSection } from '@/features/post/NavigationSection'
import { Post } from '@/features/post/Post'
import { PostComments } from '@/features/post/PostComments'

interface PostWithCommentsProps {
  postId: any
}

const PostWithComments = ({ postId }: PostWithCommentsProps) => {
  return (
    <div>
      <Post postId={postId} />
      <NavigationSection postId={postId} section="comments" />
      <CreateComment postId={postId} />
      <PostComments postId={postId} />
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
        <PostWithComments postId={id} />
      </main>
    </>
  )
}

export default Page
