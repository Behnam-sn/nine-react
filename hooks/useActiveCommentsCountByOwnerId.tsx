import useSWR from 'swr'

interface useActiveCommentsCountByOwnerIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useActiveCommentsCountByOwnerId = (ownerId: number) => {
  const { data, error } = useSWR(`/active-comments/owner/count/${ownerId}`)

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useActiveCommentsCountByOwnerIdProps
}
