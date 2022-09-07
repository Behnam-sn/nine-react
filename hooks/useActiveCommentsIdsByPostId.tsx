import useSWR from 'swr'

import type { IdModel } from '@/models/id.model'

interface useActiveCommentsIdsByPostIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useActiveCommentsIdsByPostId = (
  postId: number,
  skip: number,
  limit: number
) => {
  const { data, error } = useSWR(
    `/active-comments/post/ids/${postId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useActiveCommentsIdsByPostIdProps
}
