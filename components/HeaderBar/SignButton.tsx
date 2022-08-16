import Link from 'next/link'

import { LogInIcon } from '@/components/icons/LogInIcon'
import { LogOutIcon } from '@/components/icons/LogOutIcon'
import { Spinner } from '@/components/Spinner'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { SignOut } from '@/utils/auth'

export const SignButton = () => {
  const { isLoading, loggedOut } = useCurrentUser()

  if (isLoading) return <Spinner className="flex justify-end" />

  if (loggedOut)
    return (
      <Link href="/sign">
        <a>
          <LogInIcon className="mr-0 ml-auto h-9 w-9" />
        </a>
      </Link>
    )

  return (
    <button className="mr-0 ml-auto block" onClick={SignOut}>
      <LogOutIcon className=" h-9 w-9" />
    </button>
  )
}
