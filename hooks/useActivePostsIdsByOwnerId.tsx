import useSWR from 'swr'

import type { IdModel } from '@/models/id.model'

interface useActivePostsIdsByOwnerIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useActivePostsIdsByOwnerId = (
  ownerId: number,
  skip: number,
  limit: number
) => {
  const { data, error } = useSWR(
    `/active-posts/owner/ids/${ownerId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useActivePostsIdsByOwnerIdProps
}
