import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Author } from '@/components/Author'
import { AddPostForm } from '@/components/Forms/AddPostForm'
import { Spinner } from '@/components/Spinner'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const Add = () => {
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
    <div className="px-5 pt-5">
      <Author id={currentUser.id} />
      <AddPostForm />
    </div>
  )
}

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nine - Add Post</title>
      </Head>

      <main>
        <Add />
      </main>
    </>
  )
}

export default Page
