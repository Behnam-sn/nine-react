import Link from 'next/link'
import { useSWRConfig } from 'swr'

import { SignInOutline } from '@/components/icons/SignInOutline'
import { SignOutIconOutline } from '@/components/icons/SignOutIconOutline'
import { Spinner } from '@/components/Spinner'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { signOut } from '@/utils/auth'

export const SignButton = () => {
  const { isLoading, loggedOut } = useCurrentUser()
  const { mutate } = useSWRConfig()

  if (isLoading) return <Spinner className="flex justify-end" />

  if (loggedOut)
    return (
      <Link href="/sign">
        <a>
          <SignInOutline className="mr-0 ml-auto h-9 w-9" />
        </a>
      </Link>
    )

  return (
    <button
      className="mr-0 ml-auto block"
      onClick={() => {
        signOut()
        mutate('/users/current-user')
      }}
    >
      <SignOutIconOutline className=" h-9 w-9" />
    </button>
  )
}
