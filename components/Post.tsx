import type { PostModel } from '@/models/post.model'

interface Props {
  post: PostModel
}

export const Post = ({ post }: Props) => {
  return (
    <div className="mb-2 border-b-2 border-secondary-500 pb-2 text-secondary-900 transition-colors duration-300 dark:text-primary-900">
      <div>{post.id}</div>
      <div>{post.owner_id}</div>
      <div>{post.text}</div>
    </div>
  )
}
