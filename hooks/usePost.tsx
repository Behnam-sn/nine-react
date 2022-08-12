import useSWR from 'swr'

import type { PostModel } from '@/models/post.model'

interface Props {
  post: PostModel
  isLoading: boolean
  error: any
}

export const usePost = (id: number) => {
  const { data, error } = useSWR(`/posts/${id}`)

  return {
    post: data,
    isLoading: !data && !error,
    error: error
  } as Props
}
