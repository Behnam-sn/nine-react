import { Comment } from '@/components/Comment/Comment'
import type { CommentModel } from '@/models/comment.model'

interface CommentsProps {
  comments: CommentModel[]
}

export const Comments = ({ comments }: CommentsProps) => {
  if (comments.length > 0) {
    return (
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No comments yet</div>
  }
}
