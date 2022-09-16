import useSWR, { KeyedMutator } from 'swr'

import { useCurrentUserContext } from '@/contexts/CurrentUserContext'

interface useIsPostLikedProps {
  isLiked: boolean
  isLoading: boolean
  error: any
  mutateIsPostLiked: KeyedMutator<any>
}

export const useIsPostLiked = (postId: number) => {
  const { loggedOut } = useCurrentUserContext()
  const { data, error, mutate } = useSWR(
    loggedOut ? null : `/likes/is-post-liked/${postId}`
  )

  return {
    isLiked: data,
    isLoading: !data && !error,
    error: error,
    mutateIsPostLiked: mutate
  } as useIsPostLikedProps
}
