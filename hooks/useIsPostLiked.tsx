import useSWR from 'swr'

interface useIsPostLikedProps {
  isLiked: boolean
  isLoading: boolean
  error: any
}

export const useIsPostLiked = (postId: number) => {
  const { data, error } = useSWR(`/likes/is-post-liked/${postId}`)

  return {
    isLiked: data,
    isLoading: !data && !error,
    error: error
  } as useIsPostLikedProps
}
