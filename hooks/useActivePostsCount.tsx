import useSWR from 'swr'

interface useActivePostsCountProps {
  count: number
  isLoading: boolean
  error: any
}

export const useActivePostsCount = () => {
  const { data, error } = useSWR('/active-posts/count/')

  return {
    count: data,
    isLoading: !data || error,
    error: error
  } as useActivePostsCountProps
}
