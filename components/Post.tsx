import { CommentIcon } from '@/components/icons/CommentIcon'
import { LikeIcon } from '@/components/icons/LikeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { useAuthor } from '@/hooks/useAuthor'
import type { PostModel } from '@/models/post.model'
import { dateTimeDistanceFilter } from '@/utils/date'

interface Props {
  post: PostModel
}

export const Post = ({ post }: Props) => {
  return (
    <div className="mb-4 border-b-2 border-secondary-500 pb-4 text-secondary-900 transition-colors duration-300 dark:text-primary-900">
      <div className="px-4">
        <div className="flex items-center justify-between text-xs">
          <Author id={post.owner_id} />
          <div>{dateTimeDistanceFilter(post.created_at)}</div>
        </div>
        <div className="my-2 ml-14">{post.text}</div>
        <div className="flex items-center justify-end">
          <button className="ml-4">
            <CommentIcon className="h-5 fill-secondary-900 transition-colors duration-300 dark:fill-primary-900" />
          </button>
          <div className="ml-2">{post.comments.length}</div>
          <button className="ml-4">
            <LikeIcon className="h-5 fill-secondary-900 transition-colors duration-300 dark:fill-primary-900" />
          </button>
          <div className="ml-2">{post.likes.length}</div>
        </div>
      </div>
    </div>
  )
}
interface AuthorProps {
  id: number
}
const Author = ({ id }: AuthorProps) => {
  const { author, isLoading } = useAuthor(id)

  if (isLoading) return <div>loading...</div>

  return (
    <div className="flex items-center">
      <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-900 transition-colors duration-300 dark:bg-primary-900">
        <UserIcon className="w-5 fill-primary-900 transition-colors duration-300 dark:fill-secondary-900" />
      </div>
      <div>
        <div>{author.name}</div>
        <div className="text-xs text-primary-600">{`@${author.username}`}</div>
      </div>
    </div>
  )
}
