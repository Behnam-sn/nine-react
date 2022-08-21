import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Spinner } from '@/components/Spinner'
import { Comments } from '@/components/User/Comments'
import { NavSection } from '@/components/User/NavSection'
import { User } from '@/components/User/User'
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
      <NavSection section="comments" username={user.username} />
      <Comments comments={user.comments} />
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
