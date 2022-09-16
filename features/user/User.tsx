import axios from 'axios'
import { useSWRConfig } from 'swr'

import { BadgeIcon } from '@/components/icons/BadgeIcon'
import { UserCircleIconOutline } from '@/components/icons/UserCircleIconOutline'
import { Spinner } from '@/components/Spinner'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useIsFollowing } from '@/hooks/useIsFollowing'
import { UserModel } from '@/models/user.model'

interface UserProps {
  user: UserModel
}

export const User = ({ user }: UserProps) => {
  return (
    <div className={`mb-4 px-4 ${user.is_active === false && 'opacity-60'}`}>
      <div className="my-2 flex content-center">
        <div className="mr-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
            <UserCircleIconOutline className="h-20 w-20 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
          </div>
        </div>
        <div className="flex w-full justify-around">
          <div className="my-auto text-center">
            <div className="font-bold">{user.posts}</div>
            <div className="text-sm font-light">Posts</div>
          </div>
          <div className="my-auto text-center">
            <div className="font-bold">{user.followers}</div>
            <div className="text-sm font-light">Followers</div>
          </div>
          <div className="my-auto text-center">
            <div className="font-bold">{user.followings}</div>
            <div className="text-sm font-light">Followings</div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-baseline">
          <div className="mr-1 text-3xl font-semibold">{user.name}</div>
          {user.is_superuser && <BadgeIcon className="h-5 w-5 stroke-2 text-blue-500" />}
        </div>
        <div className="mt-1 text-sm text-primary-300">{`@${user.username}`}</div>
        <div>{user.bio}</div>
      </div>

      <FollowButton user={user} />
    </div>
  )
}

interface FollowButtonProps {
  user: UserModel
}

const FollowButton = ({ user }: FollowButtonProps) => {
  const { isFollowing, mutateIsFollowing } = useIsFollowing(user.id)
  const { currentUser, isLoading, loggedOut } = useCurrentUser()
  const { mutate } = useSWRConfig()

  const follow = async () => {
    await axios.post(`/follows/${user.id}`)
    return { ...user, followers: user.followers + 1 }
  }

  const unfollow = async () => {
    await axios.delete(`/follows/${user.id}`)
    return { ...user, followers: user.followers - 1 }
  }

  const handleClick = async () => {
    if (!isFollowing) {
      mutate(`/active-users/${user.username}`, follow(), {
        optimisticData: { ...user, followers: user.followers + 1 },
        rollbackOnError: true
      })
      mutateIsFollowing(true, false)
    } else {
      mutate(`/active-users/${user.username}`, unfollow, {
        optimisticData: { ...user, followers: user.followers - 1 },
        rollbackOnError: true
      })
      mutateIsFollowing(false, false)
    }
  }

  if (isLoading) return <Spinner />
  if (loggedOut) return <></>
  if (currentUser.id === user.id) return <></>

  return (
    <button
      className="mt-4 w-full rounded-full bg-primary-900 py-2 font-bold text-primary-100 transition-colors duration-300 dark:bg-primary-100 dark:text-primary-900"
      type="button"
      onClick={handleClick}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}
