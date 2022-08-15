import { Author } from '@/components/Author'
import type { PostLike } from '@/models/post.model'

interface LikesProps {
  likes: PostLike[]
}

export const Likes = ({ likes }: LikesProps) => {
  if (likes.length > 0) {
    return (
      <div>
        {likes.map(like => (
          <Like key={like.id} like={like} />
        ))}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No likes yet</div>
  }
}

interface LikeProps {
  like: PostLike
}

const Like = ({ like }: LikeProps) => {
  return (
    <div className="px-4 pt-4 ">
      <Author id={like.owner_id} />
    </div>
  )
}
