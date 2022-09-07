import useSWR from 'swr'

import type { CommentModel } from '@/models/comment.model'

interface useActiveCommentProps {
  comment: CommentModel
  isLoading: boolean
  error: any
}

export const useActiveComment = (commentId: number) => {
  const { data, error } = useSWR(`/active-comments/${commentId}`)

  return {
    comment: data,
    isLoading: !data && !error,
    error: error
  } as useActiveCommentProps
}
