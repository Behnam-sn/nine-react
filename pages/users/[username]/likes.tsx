import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Divider } from '@/components/Divider'
import { Spinner } from '@/components/Spinner'
import { Likes } from '@/components/User/Likes'
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

      <Divider />
      <div className="flex">
        <Link href={`/users/${user.username}`}>
          <a className="my-3 ml-2 mr-1 flex w-full justify-center rounded-md py-2 font-semibold text-primary-900 transition-colors duration-300 dark:text-primary-100">
            Posts
          </a>
        </Link>
        <Link href={`/users/${user.username}/comments`}>
          <a className="my-3 mx-1 flex w-full justify-center rounded-md py-2 font-semibold text-primary-900 transition-colors duration-300 dark:text-primary-100">
            Comments
          </a>
        </Link>
        <Link href={`/users/${user.username}/likes`}>
          <a className="my-3 ml-1 mr-2 flex w-full justify-center rounded-md bg-primary-300 py-2 font-semibold text-primary-100 transition-colors duration-300 dark:bg-primary-600">
            Likes
          </a>
        </Link>
      </div>
      <Divider />

      <Likes likes={user.likes} />
    </>
  )
}

interface Props {}

const Page: NextPage<Props> = ({}) => {
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
