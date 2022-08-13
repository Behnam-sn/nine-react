import Link from 'next/link'

import { Author } from '@/components/Author'
import { LikeIcon } from '@/components/icons/LikeIcon'
import { Line } from '@/components/Line'
import { useAuthor } from '@/hooks/useAuthor'
import type { CommentModel } from '@/models/comment.model'
import { dateTimeDistanceFilter } from '@/utils/date'

interface Props {
  comment: CommentModel
  postOwnerId: number
}

export const Comment = ({ comment, postOwnerId }: Props) => {
  const { author, isLoading } = useAuthor(postOwnerId)

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div className="relative z-0 mt-4 pb-10 text-primary-900 transition-colors duration-300 dark:text-primary-100">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <Author id={comment.owner_id} />
            <div className="text-xs">
              {dateTimeDistanceFilter(comment.created_at)}
            </div>
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
            <LikeIcon className="h-6 w-6" />
          </button>
          <div className="ml-2">{comment.likes.length}</div>
        </div>
      </div>
      <Line />
    </>
  )
}
