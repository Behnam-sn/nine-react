import Link from 'next/link'

import { Author } from '@/components/Author'
import { CommentIcon } from '@/components/icons/CommentIcon'
import { LikeIcon } from '@/components/icons/LikeIcon'
import { Line } from '@/components/Line'
import type { PostModel } from '@/models/post.model'
import { dateTimeDistanceFilter } from '@/utils/date'

interface Props {
  post: PostModel
}

export const Post = ({ post }: Props) => {
  return (
    <>
      <article className="relative z-0 mt-4 pb-10 text-secondary-900 transition-colors duration-300 dark:text-primary-900">
        <Link href={`/posts/${post.id}`}>
          <div className="px-4">
            <div className="flex items-center justify-between text-xs">
              <Author id={post.owner_id} />
              <div>{dateTimeDistanceFilter(post.created_at)}</div>
            </div>
            <div className="my-1 ml-14">{post.text}</div>
          </div>
        </Link>
        <div className="absolute right-4 bottom-4 z-10 flex items-center justify-end">
          <button className="ml-4">
            <CommentIcon className="h-5 fill-secondary-900 transition-colors duration-300 dark:fill-primary-900" />
          </button>
          <div className="ml-2">{post.comments.length}</div>
          <button className="ml-4">
            <LikeIcon className="h-5 fill-secondary-900 transition-colors duration-300 dark:fill-primary-900" />
          </button>
          <div className="ml-2">{post.likes.length}</div>
        </div>
      </article>
      <Line />
    </>
  )
}
