import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

import { Author } from '@/components/Author'
import { Spinner } from '@/components/Spinner'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import type { PostLike } from '@/models/post.model'

interface LikesProps {
  likes: PostLike[]
}

export const Likes = ({ likes }: LikesProps) => {
  if (likes.length > 0) {
    return (
      <div className="pt-4">
        {likes.map(like => (
          <Like key={like.id} like={like} />
        ))}
      </div>
    )
  } else {
    return <div className="mt-8 text-center text-lg">No likes yet</div>
  }
}

interface LikeProps {
  like: PostLike
}

const Like = ({ like }: LikeProps) => {
  return (
    <div className="flex items-center justify-between px-4 pb-6">
      <Author id={like.owner_id} />
      <Follow like={like} />
    </div>
  )
}

interface FollowProps {
  like: PostLike
}

const Follow = ({ like }: FollowProps) => {
  const [isFollowing, setIsFollowing] = useState(false)
  const { currentUser, isLoading, loggedOut } = useCurrentUser()
  const { mutate } = useSWRConfig()

  useEffect(() => {
    if (currentUser) {
      let found = currentUser.followings.find(follow => {
        return follow.following_id === like.owner_id
      })

      found ? setIsFollowing(true) : setIsFollowing(false)
    }
  }, [currentUser, like.owner_id])

  const handleClick = async () => {
    if (isFollowing) {
      await axios
        .delete(`/follows/${like.owner_id}`)
        .then(() => {
          mutate('/users/current-user')
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      await axios
        .post(`/follows/${like.owner_id}`)
        .then(() => {
          mutate('/users/current-user')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  if (isLoading) return <Spinner />
  if (loggedOut) return <></>
  if (currentUser.id === like.owner_id) return <></>

  return (
    <button
      className="w-24 rounded-md bg-primary-200 py-2 text-sm font-medium text-primary-900 transition-colors duration-300 dark:bg-primary-500 dark:text-primary-100"
      onClick={handleClick}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}
