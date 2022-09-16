import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import type { LikeModel } from '@/models/like.model'

interface useLikeProps {
  like: LikeModel
  isLoading: boolean
  error: any
}

export const useLike = (likeId: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser ? `/likes/${likeId}` : `/active-likes/${likeId}`
  )

  return {
    like: data,
    isLoading: !data && !error,
    error: error
  } as useLikeProps
}
