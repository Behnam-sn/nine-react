import useSWR, { KeyedMutator } from 'swr'

interface useIsCommentLikedProps {
  isLiked: boolean
  isLoading: boolean
  error: any
  mutateIsCommentLiked: KeyedMutator<any>
}

export const useIsCommentLiked = (commentId: number) => {
  const { data, error, mutate } = useSWR(`/likes/is-comment-liked/${commentId}`)

  return {
    isLiked: data,
    isLoading: !data && !error,
    error: error,
    mutateIsCommentLiked: mutate
  } as useIsCommentLikedProps
}
