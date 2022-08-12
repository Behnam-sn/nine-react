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
    <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-primary-900 p-3 dark:bg-secondary-900 lg:hidden">
      <div className="w-full">
        <button className="flex items-center" onClick={ToggleTheme}>
          {theme === 'light' ? (
            <MoonIcon className="h-8 fill-secondary-900" />
          ) : (
            <SunIcon className="h-8 fill-primary-900" />
          )}
        </button>
      </div>
      <div className="w-full text-center text-lg font-bold text-secondary-900 transition-colors duration-300 dark:text-primary-900">
        nine
      </div>
      <div className="w-full">
        <LogInIcon className="mr-0 ml-auto h-8 fill-secondary-900 transition-colors duration-300 dark:fill-primary-900" />
      </div>
    </header>
  )
}
