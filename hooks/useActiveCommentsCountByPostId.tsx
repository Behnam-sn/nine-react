import useSWR from 'swr'

interface useActiveCommentsCountByPostIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useActiveCommentsCountByPostId = (postId: number) => {
  const { data, error } = useSWR(`/active-comments/post/count/${postId}`)

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useActiveCommentsCountByPostIdProps
}
