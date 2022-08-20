import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Divider } from '@/components/Divider'
import { Spinner } from '@/components/Spinner'
import { Posts } from '@/components/User/Posts'
import { User } from '@/components/User/User'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const Profile = () => {
  const router = useRouter()
  const { currentUser, isLoading, loggedOut } = useCurrentUser()

  useEffect(() => {
    if (loggedOut) {
      router.push('/sign')
    }
  }, [])

  if (isLoading) return <Spinner />
  if (loggedOut) return <></>

  return (
    <>
      <User user={currentUser} />

      <div className="px-4">
        <button className="my-4 w-full rounded-full bg-primary-900 py-2 font-bold text-primary-100 transition-colors duration-300 dark:bg-primary-100 dark:text-primary-900">
          Settings
        </button>
      </div>

      <Divider />
      <div className="flex">
        <Link href={`/profile`}>
          <a className="my-3 ml-2 mr-1 flex w-full justify-center rounded-md bg-primary-300 py-2 font-semibold text-primary-100 transition-colors duration-300 dark:bg-primary-600">
            Posts
          </a>
        </Link>
        <Link href={`/profile/comments`}>
          <a className="my-3 mx-1 flex w-full justify-center rounded-md py-2 font-semibold text-primary-900 transition-colors duration-300 dark:text-primary-100">
            Comments
          </a>
        </Link>
        <Link href={`/profile/likes`}>
          <a className="my-3 ml-1 mr-2 flex w-full justify-center rounded-md py-2 font-semibold text-primary-900 transition-colors duration-300 dark:text-primary-100">
            Likes
          </a>
        </Link>
      </div>
      <Divider />

      <Posts posts={currentUser.posts} />
    </>
  )
}

const Page: NextPage = () => {
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
