import '@/styles/globals.css'

import axios from 'axios'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { SWRConfig, useSWRConfig } from 'swr'

import { FetchTheme } from '@/components/FetchTheme'
import { HeaderBar } from '@/components/HeaderBar/HeaderBar'
import { NavBar } from '@/components/NavBar/NavBar'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { getCookie } from '@/utils/cookie'
import { fetcher } from '@/utils/fetcher'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

function MyApp({ Component, pageProps }: AppProps) {
  const { mutate } = useSWRConfig()

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + getCookie(document.cookie, 'token')
    mutate('/users/current-user')
  }, [])

  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher: fetcher
        }}
      >
        <ThemeProvider>
          <FetchTheme>
            <HeaderBar />
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
