import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import { UserModel } from '@/models/user.model'

interface useUserProps {
  user: UserModel
  isLoading: boolean
  error: any
}

export const useUser = (username: string) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser ? `/users/${username}` : `/active-users/${username}`
  )

  return {
    user: data,
    isLoading: !data && !error,
    error: error
  } as useUserProps
}
