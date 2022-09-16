import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Spinner } from '@/components/Spinner'
import { NavigationSection } from '@/features/user/NavigationSection'
import { User } from '@/features/user/User'
import { UserComments } from '@/features/user/UserComments'
import { useUser } from '@/hooks/useUser'

interface UserWithCommentsProps {
  username: any
}

const UserWithComments = ({ username }: UserWithCommentsProps) => {
  const { user, isLoading, error } = useUser(username)

  if (isLoading) return <Spinner />
  if (error) return <div>user not found</div>

  return (
    <>
      <User user={user} />
      <NavigationSection username={username} section="comments" />
      <UserComments userId={user.id} />
    </>
  )
}

const Page: NextPage = () => {
  const router = useRouter()
  const { username } = router.query

  return (
    <>
      <Head>
        <title>page</title>
      </Head>

      <main>
        <UserWithComments username={username} />
      </main>
    </>
  )
}

export default Page
