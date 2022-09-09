/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { HeartIconOutline } from '@/components/icons/HeartIconOutline'
import { Owner } from '@/components/Owner'
import { useActiveComment } from '@/hooks/useActiveComment'
import { useActiveCommentsCountByPostId } from '@/hooks/useActiveCommentsCountByPostId'
import { useActiveCommentsIdsByPostId } from '@/hooks/useActiveCommentsIdsByPostId'
import { useObserver } from '@/hooks/useObserver'
import type { IdModel } from '@/models/id.model'
import { uniqueItems } from '@/utils/infiniteLoading'

interface PostCommentsProps {
  postId: number
}

export const PostComments = ({ postId }: PostCommentsProps) => {
  const [initialCount, setInitialCount] = useState(0)
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(0)
  const [items, setItems] = useState<IdModel[]>([])

  const { count } = useActiveCommentsCountByPostId(postId)
  const { ids } = useActiveCommentsIdsByPostId(postId, skip, limit)

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
        <Comment key={item.id} commentId={item.id} />
      ))}
      <div ref={ref}></div>
    </div>
  )
}

interface CommentProps {
  commentId: number
}

const Comment = ({ commentId }: CommentProps) => {
  const { comment, isLoading, error } = useActiveComment(commentId)

  if (isLoading) return <></>
  if (error) return <div>comment not found</div>

  return (
    <>
      <div className="relative z-0 mt-4 pb-10 text-primary-900 transition-colors duration-300 dark:text-primary-100">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <Owner owner={comment.owner} />
            <DateDistance date={comment.created_at} />
          </div>

          <div className="my-1 ml-14">
            <div className="mb-1 text-xs">
              Replying to
              <Link href={`/users/${comment.owner.username}`}>
                <a className="text-blue-400"> @{comment.owner.username}</a>
              </Link>
            </div>

            <div>{comment.text}</div>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 z-10 flex items-center justify-end">
          <button className="ml-4">
            <HeartIconOutline className="h-6 w-6" />
          </button>
          <div className="ml-2">{comment.likes}</div>
        </div>
      </div>

      <Divider />
    </>
  )
}
