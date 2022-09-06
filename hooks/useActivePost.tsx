import useSWR from 'swr'

import type { PostModel } from '@/models/post.model'

interface useActivePostProps {
  post: PostModel
  isLoading: boolean
  error: any
}

export const useActivePost = (id: number) => {
  const { data, error } = useSWR(`/active-posts/${id}`)

  return {
    post: data,
    isLoading: !data || error,
    error: error
  } as useActivePostProps
}
