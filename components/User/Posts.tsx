import { Post } from '@/components/Post/Post'
import type { PostModel } from '@/models/post.model'

interface PostsProps {
  posts: PostModel[]
}

export const Posts = ({ posts }: PostsProps) => {
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
