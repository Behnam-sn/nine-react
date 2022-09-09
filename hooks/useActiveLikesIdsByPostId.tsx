import useSWR from 'swr'

import type { IdModel } from '@/models/id.model'

interface useActiveLikesIdsByPostIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useActiveLikesIdsByPostId = (
  postId: number,
  skip: number,
  limit: number
) => {
  const { data, error } = useSWR(
    `/active-likes/post/ids/${postId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useActiveLikesIdsByPostIdProps
}
