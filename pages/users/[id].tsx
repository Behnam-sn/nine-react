import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const User: NextPage = ({}) => {
  const router = useRouter()
  const { id } = router.query

  return <div>User: {id}</div>
}

export default User
