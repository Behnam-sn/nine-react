import { useEffect } from 'react'

import { useTheme } from '@/contexts/ThemeContext'

interface Props {
  children: React.ReactNode
}

export const FetchTheme = ({ children }: Props) => {
  const { setTheme } = useTheme()

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
    }
  }, [])

  return <>{children}</>
}
