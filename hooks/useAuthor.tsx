import useSWR from 'swr'

import type { AuthorModel } from '@/models/user.model'

interface Props {
  author: AuthorModel
  isLoading: boolean
  error: any
}

export const useAuthor = (id: number) => {
  const { data, error } = useSWR(`/users/author/${id}`)

  return {
    author: data,
    isLoading: !data || error
  } as Props
}
