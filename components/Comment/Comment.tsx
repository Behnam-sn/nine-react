import Link from 'next/link'

import { Author } from '@/components/Author'
import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { LikeIcon } from '@/components/icons/LikeIcon'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import { Spinner } from '@/components/Spinner'
import { useAuthor } from '@/hooks/useAuthor'
import { usePost } from '@/hooks/usePost'
import type { CommentModel } from '@/models/comment.model'

interface Props {
  comment: CommentModel
}

export const Comment = ({ comment }: Props) => {
  return (
    <>
      <div className="relative z-0 mt-4 pb-10 text-primary-900 transition-colors duration-300 dark:text-primary-100">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <Author id={comment.owner_id} />
            <DateDistance date={comment.created_at} />
          </div>

          <div className="my-1 ml-14">
            <div>{comment.text}</div>
            <div className="mt-2 text-xs">Replying to :</div>
            <Post id={comment.post_id} />
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

interface PostProp {
  id: number
}

const Post = ({ id }: PostProp) => {
  const { post, isLoading, error } = usePost(id)

  if (isLoading) return <Spinner />
  if (error) return <div>post not found</div>

  return (
    <Link href={`/posts/${post.id}`}>
      <div className="my-2 rounded-xl border-2 border-primary-400 p-3">
        <div className="flex items-center justify-between text-xs">
          <PostAuthor id={post.owner_id} />
          <DateDistance date={post.created_at} />
        </div>
        <div className="mt-2 text-sm">{post.text}</div>
      </div>
    </Link>
  )
}

interface PostAuthorProp {
  id: number
}

const PostAuthor = ({ id }: PostAuthorProp) => {
  const { author, isLoading } = useAuthor(id)

  if (isLoading) return <Spinner />

  return (
    <Link href={`/users/${author.username}`}>
      <a className="flex items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
          <UserCircleIcon className="h-6 w-6 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
        </div>
        <div className="ml-2 mr-1">{author.name}</div>
        <div className="text-xs text-primary-300">{`@${author.username}`}</div>
      </a>
    </Link>
  )
}
