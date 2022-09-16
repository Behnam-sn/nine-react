import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'

interface useCommentsCountByPostIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useCommentsCountByPostId = (postId: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser ? `/comments/post/count/${postId}` : `/active-comments/post/count/${postId}`
  )

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useCommentsCountByPostIdProps
}
