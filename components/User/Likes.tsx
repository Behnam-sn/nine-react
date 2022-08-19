import { Comment } from '@/components/Comment/Comment'
import { Post } from '@/components/Post/Post'
import { Spinner } from '@/components/Spinner'
import { useComment } from '@/hooks/useComment'
import { usePost } from '@/hooks/usePost'
import type { LikeModel } from '@/models/like.model'

interface LikesProps {
  likes: LikeModel[]
}

export const Likes = ({ likes }: LikesProps) => {
  if (likes.length > 0) {
    return (
      <div>
        {likes.map(like => {
          if (like.post_id !== null) {
            return <LikedPost key={like.id} id={like.post_id} />
          }
          if (like.comment_id !== null) {
            return <LikedComment key={like.id} id={like.comment_id} />
          }
        })}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No likes yet</div>
  }
}

interface LikedPostProps {
  id: number
}

export const LikedPost = ({ id }: LikedPostProps) => {
  const { post, isLoading, error } = usePost(id)

  if (isLoading) return <Spinner />
  if (error) return <div>post not found</div>

  return <Post post={post} />
}

interface LikedCommentProps {
  id: number
}

export const LikedComment = ({ id }: LikedCommentProps) => {
  const { comment, isLoading, error } = useComment(id)

  if (isLoading) return <Spinner />
  if (error) return <div>comment not found</div>

  return <Comment comment={comment} />
}
