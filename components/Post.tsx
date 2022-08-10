import { useAuthor } from '@/hooks/useAuthor'
import type { PostModel } from '@/models/post.model'

interface Props {
  post: PostModel
}

export const Post = ({ post }: Props) => {
  return (
    <div className="mb-2 border-b-2 border-secondary-500 pb-2 text-secondary-900 transition-colors duration-300 dark:text-primary-900">
      <Author id={post.owner_id} />
      <div>{post.created_at}</div>
      <div>{post.text}</div>
      <div>{post.comments.length}</div>
      <div>{post.likes.length}</div>
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
    <div>
      <div>{author.name}</div>
      <div>{author.username}</div>
    </div>
  )
}
