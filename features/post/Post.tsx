import { useActivePost } from '@/hooks/useActivePost'

interface postProps {
  id: number
}

export const Post = ({ id }: postProps) => {
  const { post, isLoading, error } = useActivePost(id)

  if (isLoading) return <></>
  if (error) return <></>

  return (
    <div>
      <div>{post.id}</div>
      <div>{post.text}</div>
    </div>
  )
}
