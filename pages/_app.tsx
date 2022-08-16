import '@/styles/globals.css'

import axios from 'axios'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import { FetchTheme } from '@/components/FetchTheme'
import { HeadBar } from '@/components/HeadBar'
import { NavBar } from '@/components/NavBar/NavBar'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { fetcher } from '@/utils/fetcher'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 30000,
          fetcher: fetcher
        }}
      >
        <ThemeProvider>
          <FetchTheme>
            <HeadBar />
            <div className="mt-16 pb-60">
              <Component {...pageProps} />
            </div>
            <NavBar />
          </FetchTheme>
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
