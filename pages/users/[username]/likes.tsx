import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Spinner } from '@/components/Spinner'
import { Likes } from '@/components/User/Likes'
import { NavSection } from '@/components/User/NavSection'
import { User } from '@/components/User/User'
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
      <NavSection section="likes" username={user.username} />
      <Likes likes={user.likes} />
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
