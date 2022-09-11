import useSWR from 'swr'

interface useActiveLikesCountByOwnerIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useActiveLikesCountByOwnerId = (ownerId: number) => {
  const { data, error } = useSWR(`/active-likes/owner/count/${ownerId}`)

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useActiveLikesCountByOwnerIdProps
}
