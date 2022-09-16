import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import type { IdModel } from '@/models/id.model'

interface usePostsIdsProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const usePostsIds = (skip: number, limit: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser
      ? `/posts/ids/?skip=${skip}&limit=${limit}`
      : `/active-posts/ids/?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as usePostsIdsProps
}
