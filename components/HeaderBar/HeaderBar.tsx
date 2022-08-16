import { SignButton } from '@/components/HeaderBar/SignButton'
import { ThemeButton } from '@/components/HeaderBar/ThemeButton'

export const HeaderBar = () => {
  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-primary-100 p-3 text-primary-900 transition-colors duration-300 dark:bg-primary-900 dark:text-primary-100 lg:hidden">
      <div className="w-full">
        <ThemeButton />
      </div>
      <div className="w-full text-center text-lg font-bold">nine</div>
      <div className="w-full">
        <SignButton />
      </div>
    </header>
  )
}
