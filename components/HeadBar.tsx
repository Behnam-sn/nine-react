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
    <header className="fixed top-0 z-20 flex w-full justify-between px-3 lg:hidden">
      <div className="w-full">
        <button onClick={ToggleTheme}>{theme}</button>
      </div>
      <div className="w-full text-center">nine</div>
      <div className="w-full text-end">log</div>
    </header>
  )
}
