import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Likes } from '@/components/Post/Likes'
import { NavSection } from '@/components/Post/NavSection'
import { Post } from '@/components/Post/Post'
import { Spinner } from '@/components/Spinner'
import { usePost } from '@/hooks/usePost'

interface PostWithLikesProps {
  id: any
}

export const PostWithLikes = ({ id }: PostWithLikesProps) => {
  const { post, isLoading, error } = usePost(id)

  if (isLoading) return <Spinner />
  if (error) return <div>post not found</div>

  return (
    <>
      <Post post={post} />
      <NavSection section="likes" post_id={post.id} />
      <Likes likes={post.likes} />
    </>
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
        <PostWithLikes id={id} />
      </main>
    </>
  )
}

export default Page
