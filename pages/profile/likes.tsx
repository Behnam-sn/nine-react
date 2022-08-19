import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Divider } from '@/components/Divider'
import { Spinner } from '@/components/Spinner'
import { Likes } from '@/components/User/Likes'
import { User } from '@/components/User/User'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const Profile = () => {
  const router = useRouter()
  const { currentUser, isLoading, loggedOut } = useCurrentUser()

  useEffect(() => {
    if (loggedOut) {
      router.push('/sign')
    }
  }, [loggedOut, router])

  if (isLoading) return <Spinner />
  if (loggedOut) return <></>

  return (
    <>
      <User user={currentUser} />

      <Divider />
      <div className="flex">
        <Link href={`/profile`}>
          <a className="my-3 ml-2 mr-1 flex w-full justify-center rounded-md py-2 font-semibold text-primary-900 transition-colors duration-300 dark:text-primary-100">
            Posts
          </a>
        </Link>
        <Link href={`/profile/comments`}>
          <a className="my-3 mx-1 flex w-full justify-center rounded-md py-2 font-semibold text-primary-900 transition-colors duration-300 dark:text-primary-100">
            Comments
          </a>
        </Link>
        <Link href={`/profile/likes`}>
          <a className="my-3 ml-1 mr-2 flex w-full justify-center rounded-md bg-primary-300 py-2 font-semibold text-primary-100 transition-colors duration-300 dark:bg-primary-600">
            Likes
          </a>
        </Link>
      </div>
      <Divider />

      <Likes likes={currentUser.likes} />
    </>
  )
}

interface PageProps {}

const Page: NextPage<PageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Nine - Profile</title>
      </Head>

      <main>
        <Profile />
      </main>
    </>
  )
}

export default Page
