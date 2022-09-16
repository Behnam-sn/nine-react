import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Spinner } from '@/components/Spinner'
import { NavigationSection } from '@/features/user/NavigationSection'
import { User } from '@/features/user/User'
import { UserPosts } from '@/features/user/UserPosts'
import { useUser } from '@/hooks/useUser'

interface UserWithPostsProps {
  username: any
}

const UserWithPosts = ({ username }: UserWithPostsProps) => {
  const { user, isLoading, error } = useUser(username)

  if (isLoading) return <Spinner />
  if (error) return <div>user not found</div>

  return (
    <>
      <User user={user} />
      <NavigationSection username={username} section="posts" />
      <UserPosts userId={user.id} />
    </>
  )
}

const Page: NextPage = () => {
  const router = useRouter()
  const { username } = router.query

  return (
    <>
      <Head>
        <title>{`Nine - ${username} page`}</title>
      </Head>

      <main>
        <UserWithPosts username={username} />
      </main>
    </>
  )
}

export default Page
