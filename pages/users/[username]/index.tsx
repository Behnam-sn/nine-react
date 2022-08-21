import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Spinner } from '@/components/Spinner'
import { NavSection } from '@/components/User/NavSection'
import { Posts } from '@/components/User/Posts'
import { User } from '@/components/User/User'
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
      <NavSection section="posts" username={user.username} />
      <Posts posts={user.posts} />
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UserWithPosts username={username} />
      </main>
    </>
  )
}

export default Page
