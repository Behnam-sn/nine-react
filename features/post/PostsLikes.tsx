/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

import { Owner } from '@/components/Owner'
import { Spinner } from '@/components/Spinner'
import { useActiveLike } from '@/hooks/useActiveLike'
import { useActiveLikesCountByPostId } from '@/hooks/useActiveLikesCountByPostId'
import { useActiveLikesIdsByPostId } from '@/hooks/useActiveLikesIdsByPostId'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useIsFollowing } from '@/hooks/useIsFollowing'
import { useObserver } from '@/hooks/useObserver'
import { IdModel } from '@/models/id.model'
import { LikeModel } from '@/models/like.model'
import { uniqueItems } from '@/utils/infiniteLoading'

interface PostsLikesProps {
  postId: number
}

export const PostsLikes = ({ postId }: PostsLikesProps) => {
  const [initialCount, setInitialCount] = useState(0)
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(0)
  const [items, setItems] = useState<IdModel[]>([])

  const { count } = useActiveLikesCountByPostId(postId)
  const { ids } = useActiveLikesIdsByPostId(postId, skip, limit)

  const ref = useRef<HTMLDivElement>(null)
  const [isVisable] = useObserver({
    containerRef: ref,
    options: { root: null, rootMargin: '0px', threshold: 0.5 }
  })

  useEffect(() => {
    if (isVisable && items && initialCount > items.length) {
      if (skip > limit) {
        setSkip(skip - limit)
      } else {
        setLimit(skip)
        setSkip(0)
      }
    }
  }, [isVisable, items])

  useEffect(() => {
    if (count) {
      if (initialCount === 0) {
        setInitialCount(count)
        setSkip(count)
      } else {
        console.log('new posts')
      }
    }
  }, [count])

  useEffect(() => {
    if (ids) {
      setItems(pervItems =>
        uniqueItems([...pervItems, ...ids.slice(0).reverse()])
      )

      if (limit === 0) setLimit(5)
    }
  }, [ids])

  return (
    <div>
      {items.map(item => (
        <Like key={item.id} likeId={item.id} />
      ))}
      <div ref={ref}></div>
    </div>
  )
}

interface LikeProps {
  likeId: number
}

const Like = ({ likeId }: LikeProps) => {
  const { like, isLoading, error } = useActiveLike(likeId)

  if (isLoading) return <></>
  if (error) return <div>comment not found</div>

  return (
    <div className="my-4 flex items-center justify-between px-4">
      <Owner owner={like.owner} />
      <LikeButton like={like} />
    </div>
  )
}

interface LikeButtonProps {
  like: LikeModel
}

const LikeButton = ({ like }: LikeButtonProps) => {
  const { isFollowing, mutateIsFollowing } = useIsFollowing(like.owner_id)
  const { currentUser, isLoading, loggedOut } = useCurrentUser()

  const handleClick = async () => {
    if (!isFollowing) {
      axios.post(`/follows/${like.owner_id}`)
      mutateIsFollowing(true, false)
    } else {
      axios.delete(`/follows/${like.owner_id}`)
      mutateIsFollowing(false, false)
    }
  }

  if (isLoading) return <Spinner />
  if (loggedOut) return <></>
  if (currentUser.id === like.owner_id) return <></>

  return (
    <button
      className="w-24 rounded-md bg-primary-200 py-2 text-sm font-medium text-primary-900 transition-colors duration-300 dark:bg-primary-500 dark:text-primary-100"
      type="button"
      onClick={handleClick}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}
