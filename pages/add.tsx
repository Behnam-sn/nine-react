import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AddPostForm } from '@/components/Forms/AddPostForm'
import { Spinner } from '@/components/Spinner'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const Add = () => {
  const router = useRouter()
  const { isLoading, loggedOut } = useCurrentUser()

  if (isLoading) return <Spinner />

  if (loggedOut) router.push('/sign')

  return (
    <div>
      <AddPostForm />
    </div>
  )
}

interface Props {}

const Page: NextPage<Props> = ({}) => {
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
