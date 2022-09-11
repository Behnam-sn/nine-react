import useSWR from 'swr'

import type { IdModel } from '@/models/id.model'

interface useActiveCommentsIdsByOwnerIdProps {
  ids: IdModel[]
  isLoading: boolean
  error: any
}

export const useActiveCommentsIdsByOwnerId = (
  ownerId: number,
  skip: number,
  limit: number
) => {
  const { data, error } = useSWR(
    `/active-comments/owner/ids/${ownerId}?skip=${skip}&limit=${limit}`
  )

  return {
    ids: data,
    isLoading: !data || error,
    error: error
  } as useActiveCommentsIdsByOwnerIdProps
}
