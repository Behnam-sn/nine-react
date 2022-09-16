import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'

interface usePostsCountProps {
  count: number
  isLoading: boolean
  error: any
}

export const usePostsCount = () => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(currentUser && currentUser.is_superuser ? '/posts/count/' : '/active-posts/count/')

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as usePostsCountProps
}
