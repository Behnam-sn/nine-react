import Link from 'next/link'

import { LogInIcon } from '@/components/icons/LogInIcon'
import { LogOutIcon } from '@/components/icons/LogOutIcon'
import { Spinner } from '@/components/Spinner'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export const SignButton = () => {
  const { isLoading, loggedOut } = useCurrentUser()

  if (isLoading) return <Spinner className="" />

  if (loggedOut)
    return (
      <Link href="/sign">
        <a>
          <LogInIcon className="mr-0 ml-auto h-9 w-9" />
        </a>
      </Link>
    )

  return (
    <div>
      <LogOutIcon className="mr-0 ml-auto h-9 w-9" />
    </div>
  )
}
