import Link from 'next/link'

import { UserIcon } from '@/components/icons/UserIcon'
import { useAuthor } from '@/hooks/useAuthor'

interface Props {
  id: number
}
export const Author = ({ id }: Props) => {
  const { author, isLoading } = useAuthor(id)

  if (isLoading) return <div>loading...</div>

  return (
    <div className="flex items-center text-xs">
      <Link href={`/users/${author.username}`}>
        <a className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
          <UserIcon className="w-5 fill-primary-100 transition-colors duration-300 dark:fill-primary-900" />
        </a>
      </Link>
      <div className="flex flex-col">
        <Link href={`/users/${author.username}`}>
          <a>{author.name}</a>
        </Link>
        <Link href={`/users/${author.username}`}>
          <a className="text-xs text-primary-300">{`@${author.username}`}</a>
        </Link>
      </div>
    </div>
  )
}
