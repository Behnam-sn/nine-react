import { BellIcon } from '@/components/icons/BellIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { NavBarItem } from '@/components/NavBar/NavBarItem'

export const NavBar = () => {
  return (
    <div className="fixed bottom-0 z-20 flex w-full justify-between bg-primary-100 p-3 transition-colors duration-300 dark:bg-primary-900 lg:hidden">
      <NavBarItem href="/">
        <HomeIcon className="h-9 w-9 text-primary-900 transition-colors duration-300 dark:text-primary-100" />
      </NavBarItem>

      <NavBarItem href="/search">
        <SearchIcon className="h-9 w-9 text-primary-900 transition-colors duration-300 dark:text-primary-100" />
      </NavBarItem>

      <NavBarItem href="/">
        <PlusIcon className="h-9 w-9 text-primary-900 transition-colors duration-300 dark:text-primary-100" />
      </NavBarItem>

      <NavBarItem href="/notification">
        <BellIcon className="h-9 w-9 text-primary-900 transition-colors duration-300 dark:text-primary-100" />
      </NavBarItem>

      <NavBarItem href="/">
        <UserIcon className="h-9 w-9 text-primary-900 transition-colors duration-300 dark:text-primary-100" />
      </NavBarItem>
    </div>
  )
}
