import Link from 'next/link'

import { Author } from '@/components/Author'
import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { LikeIcon } from '@/components/icons/SolidLikeIcon'
import { Spinner } from '@/components/Spinner'
import { useAuthor } from '@/hooks/useAuthor'
import type { CommentModel } from '@/models/comment.model'

interface CommentsProps {
  comments: CommentModel[]
  postOwnerId: number
}

export const Comments = ({ comments, postOwnerId }: CommentsProps) => {
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

interface CommentProps {
  comment: CommentModel
  postOwnerId: number
}

const Comment = ({ comment, postOwnerId }: CommentProps) => {
  const { author, isLoading } = useAuthor(postOwnerId)

  if (isLoading) return <Spinner />

  return (
    <>
      <div className="relative z-0 mt-4 pb-10 text-primary-900 transition-colors duration-300 dark:text-primary-100">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <Author id={comment.owner_id} />
            <DateDistance date={comment.created_at} />
          </div>
          <div className="my-1 ml-14">
            <div className="mb-1 text-xs">
              Replying to
              <Link href={`/users/${author.username}`}>
                <a className="text-blue-400"> @{author.username}</a>
              </Link>
            </div>
            <div>{comment.text}</div>
          </div>
        </div>
        <div className="absolute right-4 bottom-4 z-10 flex items-center justify-end">
          <button className="ml-4">
            <LikeIcon className="h-6 w-6 stroke-2" />
          </button>
          <div className="ml-2">{comment.likes.length}</div>
        </div>
      </div>
      <Divider />
    </>
  )
}
