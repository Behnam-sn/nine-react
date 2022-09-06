import useSWR from 'swr'

import type { IdModel } from '@/models/id.model'

interface useActivePostsIdsProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useActivePostsIds = (skip: number, limit: number) => {
  const { data, error } = useSWR(
    `/active-posts/ids/?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useActivePostsIdsProps
}