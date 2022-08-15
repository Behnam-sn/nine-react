import { useState } from 'react'

import { Line } from '@/components/Line'
import { Comment } from '@/components/Post/Comment'
import { Like } from '@/components/Post/Like'
import { Post } from '@/components/Post/Post'
import { Spinner } from '@/components/Spinner'
import { usePost } from '@/hooks/usePost'
import type { CommentModel } from '@/models/comment.model'
import type { PostLike } from '@/models/post.model'

interface Props {
  id: any
}

export const PostWithDetails = ({ id }: Props) => {
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
              : 'text-primary-900 dark:text-primary-100'
          }`}
          onClick={() => setSection('comments')}
        >
          Comments
        </button>
        <button
          className={`my-3 ml-1 mr-2 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
            section === 'likes'
              ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
              : 'text-primary-900 dark:text-primary-100'
          }`}
          onClick={() => setSection('likes')}
        >
          Likes
        </button>
      </div>

      <Line />

      <div>
        {section === 'comments' && (
          <Comments comments={post.comments} postOwnerId={post.owner_id} />
        )}
        {section === 'likes' && <Likes likes={post.likes} />}
      </div>
    </div>
  )
}

interface CommentsProps {
  comments: [CommentModel]
  postOwnerId: number
}

const Comments = ({ comments, postOwnerId }: CommentsProps) => {
  if (comments.length > 0) {
    return (
      <div>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            postOwnerId={postOwnerId}
          />
        ))}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No comments yet</div>
  }
}

interface LikesProps {
  likes: [PostLike]
}

const Likes = ({ likes }: LikesProps) => {
  if (likes.length > 0) {
    return (
      <div>
        {likes.map(like => (
          <Like key={like.id} like={like} />
        ))}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No likes yet</div>
  }
}
