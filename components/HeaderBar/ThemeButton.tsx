import { MoonIconOutline } from '@/components/icons/MoonIconOutline'
import { SunIconOutline } from '@/components/icons/SunIconOutline'
import { useTheme } from '@/contexts/ThemeContext'

export const ThemeButton = () => {
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
    <button className="flex items-center" onClick={ToggleTheme}>
      {theme === 'light' ? (
        <MoonIconOutline className="h-9 w-9" />
      ) : (
        <SunIconOutline className="h-9 w-9" />
      )}
    </button>
  )
}
