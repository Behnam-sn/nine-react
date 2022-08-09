import { BellIcon } from '@/components/icons/BellIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { NavBarItem } from '@/components/NavBar/NavBarItem'

export const NavBar = () => {
  return (
    <div className="fixed bottom-0 z-20 flex w-full justify-between p-3 lg:hidden">
      <NavBarItem>
        <HomeIcon className="h-8" />
      </NavBarItem>
      <NavBarItem>
        <SearchIcon className="h-8" />
      </NavBarItem>
      <NavBarItem>
        <PlusIcon className="h-8" />
      </NavBarItem>
      <NavBarItem>
        <BellIcon className="h-8" />
      </NavBarItem>
      <NavBarItem>
        <UserIcon className="h-8" />
      </NavBarItem>
    </div>
  )
}
