import { useState } from 'react'

import { Comment } from '@/components/Comment'
import { Like } from '@/components/Like'
import { Line } from '@/components/Line'
import { Post } from '@/components/Post'
import { usePost } from '@/hooks/usePost'

interface Props {
  id: any
}

export const FetchPost = ({ id }: Props) => {
  const { post, isLoading, error } = usePost(id)
  const [section, setSection] = useState('comments')

  if (isLoading) return <div>loading...</div>
  if (error) return <div>post not found</div>

  return (
    <>
      <Post post={post} />

      <div className="flex text-secondary-900 transition-colors duration-300 dark:text-primary-900">
        <button
          className={`my-3 ml-2 mr-1 flex w-full justify-center rounded-md py-2 font-semibold ${
            section === 'comments' ? 'bg-secondary-500 text-primary-900' : ''
          }`}
          onClick={() => setSection('comments')}
        >
          Comments
        </button>
        <button
          className={`my-3 ml-1 mr-2 flex w-full justify-center rounded-md py-2 font-semibold ${
            section === 'likes' ? 'bg-secondary-500 text-primary-900' : ''
          }`}
          onClick={() => setSection('likes')}
        >
          Likes
        </button>
      </div>

      <Line />

      <div>
        {section === 'comments' ? (
          <>
            {post.comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                postOwnerId={post.owner_id}
              />
            ))}
          </>
        ) : (
          <>
            {post.likes.map(like => (
              <Like key={like.id} like={like} />
            ))}
          </>
        )}
      </div>
    </>
  )
}
