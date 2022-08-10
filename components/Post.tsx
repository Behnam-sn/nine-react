import { useAuthor } from '@/hooks/useAuthor'
import type { PostModel } from '@/models/post.model'

interface Props {
  post: PostModel
}

export const Post = ({ post }: Props) => {
  return (
    <div className="mb-2 border-b-2 border-secondary-500 pb-2 text-secondary-900 transition-colors duration-300 dark:text-primary-900">
      <div>{post.id}</div>
      <Author id={post.owner_id} />
      <div>{post.text}</div>
    </div>
  )
}
interface AuthorProps {
  id: number
}
const Author = ({ id }: AuthorProps) => {
  const { author, isLoading, error } = useAuthor(id)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <div>{author.name}</div>
      <div>{author.username}</div>
    </div>
  )
}
