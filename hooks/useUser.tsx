import useSWR from 'swr'

import { UserModel } from '@/models/user.model'

interface Props {
  user: UserModel
  isLoading: boolean
  error: any
}

export const useUser = (username: string) => {
  const { data, error } = useSWR(`/users/${username}`)

  return {
    user: data,
    isLoading: !data && !error,
    error: error
  } as Props
}
