import Link from 'next/link'

import { BadgeIcon } from '@/components/icons/BadgeIcon'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
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
          <UserCircleIcon className="h-9 w-9 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
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
      {author.is_superuser && (
        <BadgeIcon className="ml-1 h-4 w-4 text-blue-500" />
      )}
    </div>
  )
}
