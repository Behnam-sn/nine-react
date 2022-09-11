/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

import { Comment } from '@/features/comment/Comment'
import { Post } from '@/features/post/Post'
import { useActiveLike } from '@/hooks/useActiveLike'
import { useActiveLikesCountByOwnerId } from '@/hooks/useActiveLikesCountByOwnerId'
import { useActiveLikesIdsByOwnerId } from '@/hooks/useActiveLikesIdsByOwnerId'
import { useObserver } from '@/hooks/useObserver'
import type { IdModel } from '@/models/id.model'
import { uniqueItems } from '@/utils/infiniteLoading'

interface UserLikesProps {
  userId: number
}

export const UserLikes = ({ userId }: UserLikesProps) => {
  const [initialCount, setInitialCount] = useState(0)
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(0)
  const [items, setItems] = useState<IdModel[]>([])

  const { count } = useActiveLikesCountByOwnerId(userId)
  const { ids } = useActiveLikesIdsByOwnerId(userId, skip, limit)

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
  if (error) return <></>

  return (
    <div>
      {like.post_id !== null && <Post postId={like.post_id} />}
      {like.comment_id !== null && <Comment commentId={like.comment_id} />}
    </div>
  )
}
