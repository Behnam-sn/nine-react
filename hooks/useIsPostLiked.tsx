import useSWR, { KeyedMutator } from 'swr'

interface useIsPostLikedProps {
  isLiked: boolean
  isLoading: boolean
  error: any
  mutateIsPostLiked: KeyedMutator<any>
}

export const useIsPostLiked = (postId: number) => {
  const { data, error, mutate } = useSWR(`/likes/is-post-liked/${postId}`)

  return {
    isLiked: data,
    isLoading: !data && !error,
    error: error,
    mutateIsPostLiked: mutate
  } as useIsPostLikedProps
}
