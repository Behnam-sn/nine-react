import { useEffect } from 'react'

import { useTheme } from '@/contexts/ThemeContext'

interface FetchThemeProps {
  children: React.ReactNode
}

export const FetchTheme = ({ children }: FetchThemeProps) => {
  const { setTheme } = useTheme()

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
    }
  }, [setTheme])

  return <>{children}</>
}
