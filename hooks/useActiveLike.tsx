import useSWR from 'swr'

import type { LikeModel } from '@/models/like.model'

interface useActiveLikeProps {
  like: LikeModel
  isLoading: boolean
  error: any
}

export const useActiveLike = (likeId: number) => {
  const { data, error } = useSWR(`/active-likes/${likeId}`)

  return {
    like: data,
    isLoading: !data && !error,
    error: error
  } as useActiveLikeProps
}
