import useSWR from 'swr'

import { UserModel } from '@/models/user.model'

interface Props {
  currentUser: UserModel
  isLoading: boolean
  loggedOut: any
}

export const useCurrentUser = () => {
  const { data, error } = useSWR('/users/current-user')

  return {
    currentUser: data,
    isLoading: !data && !error,
    loggedOut: error
  } as Props
}
