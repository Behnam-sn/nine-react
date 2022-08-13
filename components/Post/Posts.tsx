import { Post } from '@/components/Post/Post'
import type { PostModel } from '@/models/post.model'

interface Props {
  posts: [PostModel]
}

export const Posts = ({ posts }: Props) => {
  if (posts.length > 0) {
    return (
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No posts yet</div>
  }
}
