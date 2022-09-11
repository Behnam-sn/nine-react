import useSWR from 'swr'

import { UserModel } from '@/models/user.model'

interface useActiveUserProps {
  user: UserModel
  isLoading: boolean
  error: any
}

export const useActiveUser = (username: string) => {
  const { data, error } = useSWR(`/active-users/${username}`)

  return {
    user: data,
    isLoading: !data && !error,
    error: error
  } as useActiveUserProps
}
