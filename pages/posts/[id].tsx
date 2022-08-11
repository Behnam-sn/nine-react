import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Post: NextPage = ({}) => {
  const router = useRouter()
  const { id } = router.query

  return <div>Post: {id}</div>
}

export default Post
