/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

import { Post } from '@/features/post/Post'
import { useActivePostsCountByOwnerId } from '@/hooks/useActivePostsCountByOwnerId'
import { useActivePostsIdsByOwnerId } from '@/hooks/useActivePostsIdsByOwnerId'
import { useObserver } from '@/hooks/useObserver'
import type { IdModel } from '@/models/id.model'
import { uniqueItems } from '@/utils/infiniteLoading'

interface UserPostsProps {
  userId: number
}

export const UserPosts = ({ userId }: UserPostsProps) => {
  const [initialCount, setInitialCount] = useState(0)
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(0)
  const [items, setItems] = useState<IdModel[]>([])

  const { count } = useActivePostsCountByOwnerId(userId)
  const { ids } = useActivePostsIdsByOwnerId(userId, skip, limit)

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
        <Post key={item.id} postId={item.id} />
      ))}
      <div ref={ref}></div>
    </div>
  )
}
