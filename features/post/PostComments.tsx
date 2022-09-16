/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useSWRConfig } from 'swr'

import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { HeartIconOutline } from '@/components/icons/HeartIconOutline'
import { HeartIconSolid } from '@/components/icons/HeartIconSolid'
import { Owner } from '@/components/Owner'
import { useComment } from '@/hooks/useComment'
import { useCommentsCountByPostId } from '@/hooks/useCommentsCountByPostId'
import { useCommentsIdsByPostId } from '@/hooks/useCommentsIdsByPostId'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useIsCommentLiked } from '@/hooks/useIsCommentLiked'
import { useObserver } from '@/hooks/useObserver'
import { CommentModel } from '@/models/comment.model'
import { IdModel } from '@/models/id.model'
import { uniqueItems } from '@/utils/infiniteLoading'

interface PostCommentsProps {
  postId: number
}

export const PostComments = ({ postId }: PostCommentsProps) => {
  const [initialCount, setInitialCount] = useState(0)
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(0)
  const [items, setItems] = useState<IdModel[]>([])

  const { count } = useCommentsCountByPostId(postId)
  const { ids } = useCommentsIdsByPostId(postId, skip, limit)

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
      setItems(pervItems => uniqueItems([...pervItems, ...ids.slice(0).reverse()]))

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
  const { comment, isLoading, error } = useComment(commentId)

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
          <LikeButton comment={comment} />
          <div className="ml-2">{comment.likes}</div>
        </div>
      </div>

      <Divider />
    </>
  )
}

interface LikeButtonProps {
  comment: CommentModel
}

const LikeButton = ({ comment }: LikeButtonProps) => {
  const { isLiked, mutateIsCommentLiked } = useIsCommentLiked(comment.id)
  const { loggedOut } = useCurrentUser()

  const router = useRouter()
  const { mutate } = useSWRConfig()

  const likeComment = async () => {
    await axios.post(`/likes/comment/${comment.id}`)
    return { ...comment, likes: comment.likes + 1 }
  }

  const unlikeComment = async () => {
    await axios.delete(`/likes/comment/${comment.id}`)
    return { ...comment, likes: comment.likes - 1 }
  }

  const handleClick = async () => {
    if (loggedOut) {
      router.push('/sign')
    } else {
      if (!isLiked) {
        mutate(`/active-comments/${comment.id}`, likeComment(), {
          optimisticData: { ...comment, likes: comment.likes + 1 },
          rollbackOnError: true
        })
        mutateIsCommentLiked(true, false)
      } else {
        mutate(`/active-comments/${comment.id}`, unlikeComment(), {
          optimisticData: { ...comment, likes: comment.likes - 1 },
          rollbackOnError: true
        })
        mutateIsCommentLiked(false, false)
      }
    }
  }

  return (
    <button
      className="group ml-4 rounded-full p-1 outline-none transition-colors duration-300 hover:bg-red-300/20"
      type="button"
      title=""
      onClick={handleClick}
    >
      {isLiked ? (
        <HeartIconSolid className="h-6 w-6 text-red-500" />
      ) : (
        <HeartIconOutline className="h-6 w-6 stroke-2 text-primary-900 transition-colors duration-300 group-hover:text-red-500 dark:text-primary-100 dark:group-hover:text-red-500" />
      )}
    </button>
  )
}
