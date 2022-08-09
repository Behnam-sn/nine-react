import { BellIcon } from '@/icons/BellIcon'
import { HomeIcon } from '@/icons/HomeIcon'
import { PlusIcon } from '@/icons/PlusIcon'
import { SearchIcon } from '@/icons/SearchIcon'
import { UserIcon } from '@/icons/UserIcon'

export const NavBar = () => {
  return (
    <div className="fixed bottom-0 z-20 flex w-full justify-between p-3 lg:hidden">
      <div>
        <HomeIcon className="h-8" />
      </div>
      <div>
        <SearchIcon className="h-8" />
      </div>
      <div>
        <PlusIcon className="h-8" />
      </div>
      <div>
        <BellIcon className="h-8" />
      </div>
      <div>
        <UserIcon className="h-8" />
      </div>
    </div>
  )
}
