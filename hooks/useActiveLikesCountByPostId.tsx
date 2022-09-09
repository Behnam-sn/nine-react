import useSWR from 'swr'

interface useActiveLikesCountByPostIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useActiveLikesCountByPostId = (postId: number) => {
  const { data, error } = useSWR(`/active-likes/post/count/${postId}`)

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useActiveLikesCountByPostIdProps
}
