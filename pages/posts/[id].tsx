import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { PostWithDetails } from '@/components/Post/PostWithDetails'

const Page: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Nine - Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PostWithDetails id={id} />
      </main>
    </>
  )
}

export default Page
