import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import type { IdModel } from '@/models/id.model'

interface useCommentsIdsByPostIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useCommentsIdsByPostId = (postId: number, skip: number, limit: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser
      ? `/comments/post/ids/${postId}?skip=${skip}&limit=${limit}`
      : `/active-comments/post/ids/${postId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useCommentsIdsByPostIdProps
}
