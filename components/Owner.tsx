import Link from 'next/link'

import { BadgeIcon } from '@/components/icons/BadgeIcon'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import type { OwnerModel } from '@/models/user.model'

interface OwnerProps {
  owner: OwnerModel
}

export const Owner = ({ owner }: OwnerProps) => {
  return (
    <Link href={`/users/${owner.username}`}>
      <div className="flex items-center">
        <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
          <UserCircleIcon className="h-9 w-9 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium">{owner.name}</div>
          <div className="text-xs text-primary-300">{`@${owner.username}`}</div>
        </div>

        {owner.is_superuser && (
          <BadgeIcon className="ml-1 h-4 w-4 stroke-2 text-blue-500" />
        )}
      </div>
    </Link>
  )
}
