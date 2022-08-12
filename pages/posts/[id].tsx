import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { FetchPost } from '@/components/FetchPost'

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
        <FetchPost id={id} />
      </main>
    </>
  )
}

export default Page
