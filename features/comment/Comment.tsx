import Link from 'next/link'

import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { HeartIconOutline } from '@/components/icons/HeartIconOutline'
import { UserCircleIconOutline } from '@/components/icons/UserCircleIconOutline'
import { Owner } from '@/components/Owner'
import { Spinner } from '@/components/Spinner'
import { useActiveComment } from '@/hooks/useActiveComment'
import { useActivePost } from '@/hooks/useActivePost'
import type { OwnerModel } from '@/models/user.model'

interface CommentProps {
  commentId: number
}

export const Comment = ({ commentId }: CommentProps) => {
  const { comment, isLoading, error } = useActiveComment(commentId)

  if (isLoading) return <></>
  if (error) return <div>comment not found</div>

  return (
    <>
      <div className="relative z-0 mt-4 pb-10 text-primary-900 transition-colors duration-300 dark:text-primary-100">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <Owner owner={comment.owner} />
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
            <HeartIconOutline className="h-6 w-6 stroke-2" />
          </button>
          <div className="ml-2">{comment.likes}</div>
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
  const { post, isLoading, error } = useActivePost(id)

  if (isLoading) return <Spinner />
  if (error) return <div>post not found</div>

  return (
    <Link href={`/posts/${post.id}`}>
      <div className="my-2 rounded-xl border-2 border-primary-400 p-3">
        <div className="flex items-center justify-between text-xs">
          <PostOwner owner={post.owner} />
          <DateDistance date={post.created_at} />
        </div>
        <div className="mt-2 text-sm">{post.text}</div>
      </div>
    </Link>
  )
}

interface PostOwnerProp {
  owner: OwnerModel
}

const PostOwner = ({ owner }: PostOwnerProp) => {
  return (
    <Link href={`/users/${owner.username}`}>
      <a className="flex items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
          <UserCircleIconOutline className="h-6 w-6 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
        </div>
        <div className="ml-2 mr-1">{owner.name}</div>
        <div className="text-xs text-primary-300">{`@${owner.username}`}</div>
      </a>
    </Link>
  )
}
