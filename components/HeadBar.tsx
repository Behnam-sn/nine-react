import { LogInIcon } from '@/components/icons/LogInIcon'
import { MoonIcon } from '@/components/icons/MoonIcon'
import { SunIcon } from '@/components/icons/SunIcon'
import { useTheme } from '@/contexts/ThemeContext'

export const HeadBar = () => {
  const { theme, setTheme } = useTheme()

  const ToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-primary-100 p-3 text-primary-900 transition-colors duration-300 dark:bg-primary-900 dark:text-primary-100 lg:hidden">
      <div className="w-full">
        <button className="flex items-center" onClick={ToggleTheme}>
          {theme === 'light' ? (
            <MoonIcon className="h-9 w-9" />
          ) : (
            <SunIcon className="h-9 w-9" />
          )}
        </button>
      </div>
      <div className="w-full text-center text-lg font-bold">nine</div>
      <div className="w-full">
        <LogInIcon className="mr-0 ml-auto h-9 w-9" />
      </div>
    </header>
  )
}
