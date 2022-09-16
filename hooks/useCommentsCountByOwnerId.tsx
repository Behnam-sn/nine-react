import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'

interface useCommentsCountByOwnerIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useCommentsCountByOwnerId = (ownerId: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser
      ? `/comments/owner/count/${ownerId}`
      : `/active-comments/owner/count/${ownerId}`
  )

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useCommentsCountByOwnerIdProps
}
