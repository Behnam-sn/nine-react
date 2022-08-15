import { BadgeIcon } from '@/components/icons/BadgeIcon'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import type { UserModel } from '@/models/user.model'

interface Props {
  user: UserModel
}

export const User = ({ user }: Props) => {
  return (
    <div className="px-4">
      <div className="my-2 flex content-center">
        <div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
            <UserCircleIcon className="h-20 w-20 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-full flex-col justify-center text-center">
            <div className="font-bold">{user.posts.length}</div>
            <div>Posts</div>
          </div>
          <div className="flex w-full flex-col justify-center text-center">
            <div className="font-bold">{user.followers.length}</div>
            <div>Followers</div>
          </div>
          <div className="flex w-full flex-col justify-center text-center">
            <div className="font-bold">{user.followings.length}</div>
            <div>Followings</div>
          </div>
        </div>
      </div>

      <div className="my-2">
        <div className="flex items-baseline">
          <div className="mr-1 text-3xl font-semibold">{user.name}</div>
          {user.is_superuser && <BadgeIcon className="h-5 w-5 text-blue-500" />}
        </div>
        <div className="mt-1 text-sm text-primary-300">{`@${user.username}`}</div>
        <div>{user.bio}</div>
      </div>
    </div>
  )
}
