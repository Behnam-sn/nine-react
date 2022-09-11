import useSWR from 'swr'

interface useActivePostsCountByOwnerIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useActivePostsCountByOwnerId = (ownerId: number) => {
  const { data, error } = useSWR(`/active-posts/owner/count/${ownerId}`)

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useActivePostsCountByOwnerIdProps
}
