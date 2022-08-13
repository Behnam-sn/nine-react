import { useState } from 'react'

import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import { Line } from '@/components/Line'
import { useUser } from '@/hooks/useUser'

interface Props {
  username: any
}

export const User = ({ username }: Props) => {
  const { user, isLoading, error } = useUser(username)

  const [section, setSection] = useState('posts')

  if (isLoading) return <div>loading...</div>
  if (error) return <div>post not found</div>

  return (
    <>
      <div className="flex content-center px-4">
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

      <div className="my-2 px-4">
        <div className="text-3xl font-semibold">{user.name}</div>
        <div className="mt-1 text-sm text-primary-300">{`@${user.username}`}</div>
        <div>{user.bio}</div>
      </div>

      <Line />
      <div className="flex">
        <button
          className={`my-3 ml-2 mr-1 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
            section === 'posts'
              ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
              : 'text-primary-900 dark:text-pink-100'
          }`}
          onClick={() => setSection('posts')}
        >
          Posts
        </button>
        <button
          className={`my-3 mx-1 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
            section === 'comments'
              ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
              : 'text-primary-900 dark:text-pink-100'
          }`}
          onClick={() => setSection('comments')}
        >
          Comments
        </button>
        <button
          className={`my-3 ml-1 mr-2 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
            section === 'likes'
              ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
              : 'text-primary-900 dark:text-pink-100'
          }`}
          onClick={() => setSection('likes')}
        >
          Likes
        </button>
      </div>
      <Line />
    </>
  )
}
