import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'

interface useLikesCountByPostIdProps {
  count: number
  isLoading: boolean
  error: any
}

export const useLikesCountByPostId = (postId: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(
    currentUser && currentUser.is_superuser ? `/likes/post/count/${postId}` : `/active-likes/post/count/${postId}`
  )

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useLikesCountByPostIdProps
}
