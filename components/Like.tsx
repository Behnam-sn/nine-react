import { Author } from '@/components/Author'
import type { PostLike } from '@/models/post.model'

interface Props {
  like: PostLike
}

export const Like = ({ like }: Props) => {
  return (
    <div className="px-4 py-4 ">
      <Author id={like.owner_id} />
    </div>
  )
}
