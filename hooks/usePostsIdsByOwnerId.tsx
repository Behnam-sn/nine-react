import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import type { IdModel } from '@/models/id.model'

interface usePostsIdsByOwnerIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const usePostsIdsByOwnerId = (ownerId: number, skip: number, limit: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser
      ? `/posts/owner/ids/${ownerId}?skip=${skip}&limit=${limit}`
      : `/active-posts/owner/ids/${ownerId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as usePostsIdsByOwnerIdProps
}
