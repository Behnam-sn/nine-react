import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const User: NextPage = () => {
  const router = useRouter()
  const { username } = router.query

  return (
    <div className="text-secondary-900 dark:text-primary-900">
      User: {username}
    </div>
  )
}

export default User
