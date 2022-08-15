import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { LoginForm } from '@/components/Forms/LoginForm'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [section, setSection] = useState('login')

  return (
    <>
      <Head>
        <title>page</title>
      </Head>

      <main>
        <div className="px-8 pt-10">
          <div>
            {section === 'login' ? (
              <button
                className="ml-auto mb-4 block rounded-full border-2 border-primary-700 bg-transparent px-5 py-2 text-sm font-medium text-primary-700 transition-colors duration-300 dark:border-primary-200 dark:text-primary-200"
                onClick={() => setSection('signup')}
              >
                Sign Up
              </button>
            ) : (
              <button
                className="ml-auto mb-4 block rounded-full border-2 border-primary-700 bg-transparent px-5 py-2 text-sm font-medium text-primary-700 transition-colors duration-300 dark:border-primary-200 dark:text-primary-200"
                onClick={() => setSection('login')}
              >
                Login
              </button>
            )}
          </div>
          {section === 'login' ? <LoginForm /> : <div>singup</div>}
        </div>
      </main>
    </>
  )
}

export default Page
