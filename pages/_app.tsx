/* eslint-disable react-hooks/exhaustive-deps */
import '@/styles/globals.css'

import axios from 'axios'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { SWRConfig, useSWRConfig } from 'swr'

import { FetchTheme } from '@/components/FetchTheme'
import { CurrentUserProvider } from '@/contexts/CurrentUserContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header } from '@/features/header/Header'
import { NavBar } from '@/features/navbar/NavBar'
import { getCookie } from '@/utils/cookie'
import { fetcher } from '@/utils/fetcher'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

function MyApp({ Component, pageProps }: AppProps) {
  const { mutate } = useSWRConfig()

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + getCookie(document.cookie, 'token')
    mutate('/users/current-user/')
  }, [])

  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 10000,
          fetcher: fetcher
        }}
      >
        <ThemeProvider>
          <CurrentUserProvider>
            <FetchTheme>
              <Header />
              <div className="mt-16 pb-60">
                <Component {...pageProps} />
              </div>
              <NavBar />
            </FetchTheme>
          </CurrentUserProvider>
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
