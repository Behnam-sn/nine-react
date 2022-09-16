import useSWR from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'
import type { PostModel } from '@/models/post.model'

interface usePostProps {
  post: PostModel
  isLoading: boolean
  error: any
}

export const usePost = (id: number) => {
  const { currentUser } = useCurrentUserContext()
  const { data, error } = useSWR(currentUser && currentUser.is_superuser ? `/posts/${id}` : `/active-posts/${id}`)

  return {
    post: data,
    isLoading: !data || error,
    error: error
  } as usePostProps
}
