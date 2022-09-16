import type { NextPage } from 'next'
import Head from 'next/head'

import { Posts } from '@/features/post/Posts'

const Home = () => {
  return <Posts />

  // if (posts.length > 0) {
  //   return (
  //     <div>
  //       {posts.map(post => (
  //         <Post key={post.id} post={post} />
  //       ))}
  //     </div>
  //   )
  // } else {
  //   return <div className="mt-8 text-center text-lg">No posts yet</div>
  // }
}

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nine - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="px-4 py-1 text-2xl font-bold">Home</div>
        <Home />
      </main>
    </>
  )
}

export default Page
