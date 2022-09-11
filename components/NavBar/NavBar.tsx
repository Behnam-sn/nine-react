import { useRouter } from 'next/router'

import { BellIconOutline } from '@/components/icons/BellIconOutline'
import { BellIconSolid } from '@/components/icons/BellIconSolid'
import { HomeIconOutLine } from '@/components/icons/HomeIconOutLine'
import { HomeIconSolid } from '@/components/icons/HomeIconSolid'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { UserIconOutline } from '@/components/icons/UserIconOutline'
import { UserIconSolid } from '@/components/icons/UserIconSolid'
import { NavBarItem } from '@/components/NavBar/NavBarItem'

const activeLink = (url: string, pathname: string) => {
  return pathname === url ? 'stroke-[2.5]' : ''
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
        {router.pathname == '/notification' ? (
          <BellIconSolid className="h-9 w-9" />
        ) : (
          <BellIconOutline className="h-9 w-9" />
        )}
      </NavBarItem>

      <NavBarItem href="/profile">
        {router.pathname.includes('/profile') ? (
          <UserIconSolid className="h-9 w-9" />
        ) : (
          <UserIconOutline className="h-9 w-9" />
        )}
      </NavBarItem>
    </div>
  )
}
