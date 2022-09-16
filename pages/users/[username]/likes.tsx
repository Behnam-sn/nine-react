import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Spinner } from '@/components/Spinner'
import { NavigationSection } from '@/features/user/NavigationSection'
import { User } from '@/features/user/User'
import { UserLikes } from '@/features/user/UserLikes'
import { useUser } from '@/hooks/useUser'

interface UserWithLikesProps {
  username: any
}

const UserWithLikes = ({ username }: UserWithLikesProps) => {
  const { user, isLoading, error } = useUser(username)

  if (isLoading) return <Spinner />
  if (error) return <div>user not found</div>

  return (
    <>
      <User user={user} />
      <NavigationSection username={username} section="likes" />
      <UserLikes userId={user.id} />
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
        <UserWithLikes username={username} />
      </main>
    </>
  )
}

export default Page
