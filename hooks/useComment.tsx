import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import type { CommentModel } from '@/models/comment.model'

interface useCommentProps {
  comment: CommentModel
  isLoading: boolean
  error: any
}

export const useComment = (commentId: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser ? `/comments/${commentId}` : `/active-comments/${commentId}`
  )

  return {
    comment: data,
    isLoading: !data && !error,
    error: error
  } as useCommentProps
}
