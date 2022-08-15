import useSWR from 'swr'

import type { PostModel } from '@/models/post.model'

interface Props {
  posts: PostModel[]
  isLoading: boolean
  error: any
}

export const usePosts = () => {
  const { data, error } = useSWR('/posts/?skip=0&limit=100')

  return {
    posts: data,
    isLoading: !data || error,
    error: error
  } as Props
}
