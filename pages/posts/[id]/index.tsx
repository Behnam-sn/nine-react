import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Comments } from '@/components/Post/Comments'
import { CreateComment } from '@/components/Post/CreateComment'
import { NavSection } from '@/components/Post/NavSection'
import { Post } from '@/components/Post/Post'
import { Spinner } from '@/components/Spinner'
import { usePost } from '@/hooks/usePost'

interface PostWithCommentsProps {
  id: any
}

export const PostWithComments = ({ id }: PostWithCommentsProps) => {
  const { post, isLoading, error } = usePost(id)

  if (isLoading) return <Spinner />
  if (error) return <div>post not found</div>

  return (
    <>
      <Post post={post} />
      <NavSection section="comments" post_id={post.id} />
      <CreateComment post_id={post.id} />
      <Comments comments={post.comments} postOwnerId={post.owner_id} />
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
        <PostWithComments id={id} />
      </main>
    </>
  )
}

export default Page
