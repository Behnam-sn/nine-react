import Link from 'next/link'

import { Author } from '@/components/Author'
import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { CommentIcon } from '@/components/icons/CommentIcon'
import { LikeButton } from '@/components/Post/LikeButton'
import type { PostModel } from '@/models/post.model'

interface PostProps {
  post: PostModel
}

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <article className="relative z-0 mt-4 pb-10">
        <Link href={`/posts/${post.id}`}>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <Author id={post.owner_id} />
              <DateDistance date={post.created_at} />
            </div>
            <div className="my-1 ml-14">
              <div className="mb-1">{post.text}</div>
              {post.is_edited && (
                <div className="text-xs text-primary-500 transition-colors duration-300 dark:text-primary-300">
                  Edited
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="absolute right-4 bottom-4 z-10 flex items-center justify-end">
          <button className="ml-4">
            <CommentIcon className="h-6 w-6 stroke-2" />
          </button>

          <div className="ml-2">{post.comments.length}</div>

          <LikeButton post={post} />

          <div className="ml-2">{post.likes.length}</div>
        </div>
      </article>

      <Divider />
    </>
  )
}
