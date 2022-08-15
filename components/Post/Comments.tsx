import { Comment } from '@/components/Post/Comment'
import type { CommentModel } from '@/models/comment.model'

interface CommentsProps {
  comments: [CommentModel]
  postOwnerId: number
}

export const Comments = ({ comments, postOwnerId }: CommentsProps) => {
  if (comments.length > 0) {
    return (
      <div>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            postOwnerId={postOwnerId}
          />
        ))}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No comments yet</div>
  }
}
