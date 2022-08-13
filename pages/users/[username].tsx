import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { User } from '@/components/User/User'

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
        <User username={username} />
      </main>
    </>
  )
}

export default Page
