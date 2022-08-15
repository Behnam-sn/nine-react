import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Line } from '@/components/Line'
import { Likes } from '@/components/Post/Likes'
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

      <div className="flex">
        <Link href={`/posts/${post.id}`}>
          <a className="my-3 ml-2 mr-1 flex w-full justify-center rounded-md py-2 font-semibold text-primary-900 transition-colors duration-300 dark:text-primary-100">
            Comments
          </a>
        </Link>
        <Link href={`/posts/${post.id}/likes`}>
          <a className="my-3 ml-1 mr-2 flex w-full justify-center rounded-md bg-primary-300 py-2 font-semibold text-primary-100 transition-colors duration-300 dark:bg-primary-600">
            Likes
          </a>
        </Link>
      </div>
      <Line />

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
