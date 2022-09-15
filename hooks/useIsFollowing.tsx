import useSWR, { KeyedMutator } from 'swr'

interface useIsFollowingProps {
  isFollowing: boolean
  isLoading: boolean
  error: any
  mutateIsFollowing: KeyedMutator<any>
}

export const useIsFollowing = (followingId: number) => {
  const { data, error, mutate } = useSWR(`/follows/is-following/${followingId}`)

  return {
    isFollowing: data,
    isLoading: !data && !error,
    error,
    mutateIsFollowing: mutate
  } as useIsFollowingProps
}
