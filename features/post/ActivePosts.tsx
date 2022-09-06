/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

import { Spinner } from '@/components/Spinner'
import { useActivePostsCount } from '@/hooks/useActivePostsCount'
import { useActivePostsIds } from '@/hooks/useActivePostsIds'
import { useObserver } from '@/hooks/useObserver'
import type { IdModel } from '@/models/id.model'

export const ActivePosts = () => {
  const [initialCount, setInitialCount] = useState(0)
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(0)
  const [items, setItems] = useState<IdModel[]>([])

  const { count, isLoading } = useActivePostsCount()
  const { ids } = useActivePostsIds(skip, limit)

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
      setItems(prevItems => [...prevItems, ...ids.slice(0).reverse()])
      if (limit === 0) setLimit(5)
    }
  }, [ids])

  if (isLoading) return <Spinner />

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.id}</div>
      ))}
      <div ref={ref}></div>
    </div>
  )
}
