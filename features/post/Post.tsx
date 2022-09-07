import Link from 'next/link'

import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { CommentIconOutline } from '@/components/icons/CommentIconOutline'
import { HeartIconOutline } from '@/components/icons/HeartIconOutline'
import { Owner } from '@/components/Owner'
import { useActivePost } from '@/hooks/useActivePost'

interface postProps {
  postId: number
}

export const Post = ({ postId }: postProps) => {
  const { post, isLoading, error } = useActivePost(postId)

  if (isLoading) return <></>
  if (error) return <></>

  return (
    <>
      <article className="relative z-0 mt-4 pb-10">
        <Link href={`/posts/${post.id}`}>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <Owner owner={post.owner} />
              <DateDistance date={post.created_at} />
            </div>

            <div className="my-1 ml-14">
              <div className="mb-1">{post.text}</div>

              {post.is_modified && (
                <div className="text-xs text-primary-500 transition-colors duration-300 dark:text-primary-300">
                  Edited
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="absolute right-4 bottom-4 z-10 flex items-center justify-end">
          <button className="ml-4">
            <CommentIconOutline className="h-6 w-6" />
          </button>

          <div className="ml-2">{post.comments}</div>

          <button className="ml-4">
            <HeartIconOutline className="h-6 w-6" />
          </button>

          <div className="ml-2">{post.likes}</div>
        </div>
      </article>
      <Divider />
    </>
  )
}
