import { useRouter } from 'next/router'

import { BellIcon } from '@/components/icons/BellIcon'
import { HomeIconOutLine } from '@/components/icons/HomeIconOutLine'
import { HomeIconSolid } from '@/components/icons/HomeIconSolid'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { NavBarItem } from '@/components/NavBar/NavBarItem'

const activeLink = (url: string, pathname: string) => {
  return pathname === url ? 'stroke-2' : ''
}

export const NavBar = () => {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 z-20 flex w-full justify-between bg-primary-100 p-3 transition-colors duration-300 dark:bg-primary-900 lg:hidden">
      <NavBarItem href="/">
        {'/' == router.pathname ? (
          <HomeIconSolid className="h-9 w-9" />
        ) : (
          <HomeIconOutLine className="h-9 w-9" />
        )}
        {/* <HomeIconOutLine
          className={`h-9 w-9 ${activeLink('/', router.pathname)}`}
        /> */}
      </NavBarItem>

      <NavBarItem href="/search">
        <SearchIcon
          className={`h-9 w-9 ${activeLink('/search', router.pathname)}`}
        />
      </NavBarItem>

      <NavBarItem href="/add">
        <PlusIcon
          className={`h-9 w-9 ${activeLink('/add', router.pathname)}`}
        />
      </NavBarItem>

      <NavBarItem href="/notification">
        <BellIcon
          className={`h-9 w-9 ${activeLink('/notification', router.pathname)}`}
        />
      </NavBarItem>

      <NavBarItem href="/profile">
        <UserIcon
          className={`h-9 w-9 ${activeLink('/profile', router.pathname)}`}
        />
      </NavBarItem>
    </div>
  )
}
