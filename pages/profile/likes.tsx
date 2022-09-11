import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { NavigationSection } from '@/components/profile/NavigationSection'
import { Spinner } from '@/components/Spinner'
import { User } from '@/features/user/User'
import { UserLikes } from '@/features/user/UserLikes'
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

      <div className="px-4">
        <button className="my-4 w-full rounded-full bg-primary-900 py-2 font-bold text-primary-100 transition-colors duration-300 dark:bg-primary-100 dark:text-primary-900">
          Settings
        </button>
      </div>

      <NavigationSection section="likes" />
      <UserLikes userId={currentUser.id} />
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
