import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'

interface useLikesCountByOwnerIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useLikesCountByOwnerId = (ownerId: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser ? `/likes/owner/count/${ownerId}` : `/active-likes/owner/count/${ownerId}`
  )

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useLikesCountByOwnerIdProps
}
