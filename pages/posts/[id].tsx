import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Line } from '@/components/Line'
import { Comment } from '@/components/Post/Comment'
import { Like } from '@/components/Post/Like'
import { Post } from '@/components/Post/Post'
import { Spinner } from '@/components/Spinner'
import { usePost } from '@/hooks/usePost'

interface PostWithDetailsProps {
  id: any
}

export const PostWithDetails = ({ id }: PostWithDetailsProps) => {
  const { post, isLoading, error } = usePost(id)
  const [section, setSection] = useState('comments')

  if (isLoading) return <Spinner />
  if (error) return <div>post not found</div>

  return (
    <div>
      <Post post={post} />

      <div className="flex">
        <button
          className={`my-3 ml-2 mr-1 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
            section === 'comments'
              ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
              : 'text-primary-900 dark:text-pink-100'
          }`}
          onClick={() => setSection('comments')}
        >
          Comments
        </button>
        <button
          className={`my-3 ml-1 mr-2 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
            section === 'likes'
              ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
              : 'text-primary-900 dark:text-pink-100'
          }`}
          onClick={() => setSection('likes')}
        >
          Likes
        </button>
      </div>

      <Line />

      {section === 'comments' ? (
        post.comments.length > 0 ? (
          <div>
            {post.comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                postOwnerId={post.owner_id}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 text-center text-lg">No comments yet</div>
        )
      ) : post.comments.length > 0 ? (
        <div>
          {post.likes.map(like => (
            <Like key={like.id} like={like} />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-lg">No likes yet</div>
      )}
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
        <PostWithDetails id={id} />
      </main>
    </>
  )
}

export default Page
