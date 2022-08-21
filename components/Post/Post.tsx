import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

import { Author } from '@/components/Author'
import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { CommentIcon } from '@/components/icons/CommentIcon'
import { OutlineHeartIcon } from '@/components/icons/OutlineHeartIcon'
import { SolidHeartIcon } from '@/components/icons/SolidHeartIcon'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import type { PostModel } from '@/models/post.model'

interface PostProps {
  post: PostModel
}

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <article className="relative z-0 mt-4 pb-10">
        <Link href={`/posts/${post.id}`}>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <Author id={post.owner_id} />
              <DateDistance date={post.created_at} />
            </div>
            <div className="my-1 ml-14">
              <div className="mb-1">{post.text}</div>
              {post.is_edited && (
                <div className="text-xs text-primary-500 transition-colors duration-300 dark:text-primary-300">
                  Edited
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="absolute right-4 bottom-4 z-10 flex items-center justify-end">
          <button className="ml-4">
            <CommentIcon className="h-6 w-6 stroke-2" />
          </button>

          <div className="ml-2">{post.comments.length}</div>

          <LikeButton post={post} />

          <div className="ml-2">{post.likes.length}</div>
        </div>
      </article>

      <Divider />
    </>
  )
}

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
      className="ml-4 rounded-full p-1 outline-none transition-colors duration-300 hover:bg-red-300/20 hover:text-red-500"
      onClick={handleClick}
    >
      {isLiked ? (
        <SolidHeartIcon className="h-6 w-6 text-red-500" />
      ) : (
        <OutlineHeartIcon className="h-6 w-6 stroke-2" />
      )}
    </button>
  )
}
