import useSWR from 'swr'

import type { IdModel } from '@/models/id.model'

interface useActiveLikesIdsByOwnerIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useActiveLikesIdsByOwnerId = (
  ownerId: number,
  skip: number,
  limit: number
) => {
  const { data, error } = useSWR(
    `/active-likes/owner/ids/${ownerId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useActiveLikesIdsByOwnerIdProps
}
