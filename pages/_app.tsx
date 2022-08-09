import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { FetchTheme } from '@/components/FetchTheme'
import { HeadBar } from '@/components/HeadBar'
import { NavBar } from '@/components/NavBar/NavBar'
import { ThemeProvider } from '@/contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <FetchTheme>
          <HeadBar />
          <div className="mt-10">
            <Component {...pageProps} />
          </div>
          <NavBar />
        </FetchTheme>
      </ThemeProvider>
    </>
  )
}

export default MyApp
