import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Post: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="text-secondary-900 dark:text-primary-900">Post: {id}</div>
  )
}

export default Post
