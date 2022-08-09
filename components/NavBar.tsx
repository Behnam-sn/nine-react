import { BellIcon } from '@/components/icons/BellIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { UserIcon } from '@/components/icons/UserIcon'

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
