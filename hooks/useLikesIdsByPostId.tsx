import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import type { IdModel } from '@/models/id.model'

interface useLikesIdsByPostIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useLikesIdsByPostId = (postId: number, skip: number, limit: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser
      ? `/likes/post/ids/${postId}?skip=${skip}&limit=${limit}`
      : `/active-likes/post/ids/${postId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useLikesIdsByPostIdProps
}
