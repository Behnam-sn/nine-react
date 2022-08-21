import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

import { OutlineHeartIcon } from '@/components/icons/OutlineHeartIcon'
import { SolidHeartIcon } from '@/components/icons/SolidHeartIcon'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import type { PostModel } from '@/models/post.model'

interface LikeButtonProps {
  post: PostModel
}

export const LikeButton = ({ post }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const { currentUser, loggedOut } = useCurrentUser()
  const router = useRouter()
  const { mutate } = useSWRConfig()

  useEffect(() => {
    if (currentUser) {
      let found = post.likes.find(like => {
        return like.owner_id === currentUser.id
      })

      found ? setIsLiked(true) : setIsLiked(false)
    }
  }, [currentUser, post.likes])

  const handleClick = async () => {
    if (loggedOut) {
      router.push('/sign')
    } else {
      if (isLiked) {
        await axios
          .delete(`/likes/post/${post.id}`)
          .then(() => {
            setIsLiked(false)
            mutate(`/posts/${post.id}`)
            mutate('/users/current-user')
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        await axios
          .post(`/likes/post/${post.id}`)
          .then(() => {
            setIsLiked(true)
            mutate(`/posts/${post.id}`)
            mutate('/users/current-user')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }

  return (
    <button
      className="group ml-4 rounded-full p-1 outline-none transition-colors duration-300 hover:bg-red-300/20"
      onClick={handleClick}
    >
      {isLiked ? (
        <SolidHeartIcon className="h-6 w-6 text-red-500" />
      ) : (
        <OutlineHeartIcon className="h-6 w-6 stroke-2 text-primary-900 transition-colors duration-300 group-hover:text-red-500 dark:text-primary-100 dark:group-hover:text-red-500" />
      )}
    </button>
  )
}
