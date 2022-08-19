import useSWR from 'swr'

import type { CommentModel } from '@/models/comment.model'

interface useCommentProps {
  comment: CommentModel
  isLoading: boolean
  error: any
}

export const useComment = (id: number) => {
  const { data, error } = useSWR(`/comments/${id}`)

  return {
    comment: data,
    isLoading: !data && !error,
    error: error
  } as useCommentProps
}
