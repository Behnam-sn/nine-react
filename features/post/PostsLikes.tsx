/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

import { Owner } from '@/components/Owner'
import { useActiveLike } from '@/hooks/useActiveLike'
import { useActiveLikesCountByPostId } from '@/hooks/useActiveLikesCountByPostId'
import { useActiveLikesIdsByPostId } from '@/hooks/useActiveLikesIdsByPostId'
import { useObserver } from '@/hooks/useObserver'
import type { IdModel } from '@/models/id.model'
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
      {/* <Follow like={like} /> */}
    </div>
  )
}

// interface FollowProps {
//     like: PostLike
//   }

//   const Follow = ({ like }: FollowProps) => {
//     const [isDisabled, setIsDisabled] = useState(false)
//     const [isFollowing, setIsFollowing] = useState(false)
//     const { currentUser, isLoading, loggedOut } = useCurrentUser()
//     const { mutate } = useSWRConfig()

//     useEffect(() => {
//       if (currentUser) {
//         let found = currentUser.followings.find(follow => {
//           return follow.following_id === like.owner_id
//         })

//         found ? setIsFollowing(true) : setIsFollowing(false)
//       }
//     }, [currentUser, like.owner_id])

//     const handleClick = async () => {
//       setIsDisabled(true)

//       if (isFollowing) {
//         await axios
//           .delete(`/follows/${like.owner_id}`)
//           .then(() => {
//             setIsDisabled(false)
//             mutate('/users/current-user')
//           })
//           .catch(error => {
//             console.log(error)
//           })
//       } else {
//         await axios
//           .post(`/follows/${like.owner_id}`)
//           .then(() => {
//             setIsDisabled(false)
//             mutate('/users/current-user')
//           })
//           .catch(error => {
//             console.log(error)
//           })
//       }
//     }

//     if (isLoading) return <Spinner />
//     if (loggedOut) return <></>
//     if (currentUser.id === like.owner_id) return <></>

//     return (
//       <button
//         className="w-24 rounded-md bg-primary-200 py-2 text-sm font-medium text-primary-900 transition-colors duration-300 dark:bg-primary-500 dark:text-primary-100"
//         onClick={handleClick}
//         disabled={isDisabled}
//       >
//         {isFollowing ? 'Unfollow' : 'Follow'}
//       </button>
//     )
//   }
