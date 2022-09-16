import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'

interface usePostsCountByOwnerIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const usePostsCountByOwnerId = (ownerId: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser ? `/posts/owner/count/${ownerId}` : `/active-posts/owner/count/${ownerId}`
  )

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as usePostsCountByOwnerIdProps
}
