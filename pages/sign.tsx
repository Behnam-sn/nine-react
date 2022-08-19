import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { SignInForm } from '@/components/Forms/SignInForm'
import { SignUpForm } from '@/components/Forms/SignUpForm'

const Page: NextPage = () => {
  const [section, setSection] = useState('Sign In')

  return (
    <>
      <Head>
        <title>{`Nine - ${section}`}</title>
      </Head>

      <main>
        <div className="px-8 pt-10">
          <div>
            {section === 'Sign In' ? (
              <button
                className="ml-auto mb-4 block rounded-full border-2 border-primary-700 bg-transparent px-5 py-2 text-sm font-medium text-primary-700 transition-colors duration-300 dark:border-primary-200 dark:text-primary-200"
                onClick={() => setSection('Sign Up')}
              >
                Sign Up
              </button>
            ) : (
              <button
                className="ml-auto mb-4 block rounded-full border-2 border-primary-700 bg-transparent px-5 py-2 text-sm font-medium text-primary-700 transition-colors duration-300 dark:border-primary-200 dark:text-primary-200"
                onClick={() => setSection('Sign In')}
              >
                Sign In
              </button>
            )}
          </div>
          {section === 'Sign In' ? <SignInForm /> : <SignUpForm />}
        </div>
      </main>
    </>
  )
}

export default Page
