import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'

import { DateDistance } from '@/components/DateDistance'
import { Divider } from '@/components/Divider'
import { CommentIconOutline } from '@/components/icons/CommentIconOutline'
import { HeartIconOutline } from '@/components/icons/HeartIconOutline'
import { HeartIconSolid } from '@/components/icons/HeartIconSolid'
import { Owner } from '@/components/Owner'
import { useActivePost } from '@/hooks/useActivePost'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useIsPostLiked } from '@/hooks/useIsPostLiked'
import { PostModel } from '@/models/post.model'

interface postProps {
  postId: number
}

export const Post = ({ postId }: postProps) => {
  const { post, isLoading, error } = useActivePost(postId)

  if (isLoading) return <></>
  if (error) return <></>

  return (
    <>
      <article className="relative z-0 mt-4 pb-10">
        <Link href={`/posts/${post.id}`}>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <Owner owner={post.owner} />
              <DateDistance date={post.created_at} />
            </div>

            <div className="my-1 ml-14">
              <div className="mb-1">{post.text}</div>

              {post.is_modified && (
                <div className="text-xs text-primary-500 transition-colors duration-300 dark:text-primary-300">
                  Edited
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="absolute right-4 bottom-4 z-10 flex items-center justify-end">
          <button className="ml-4" type="button" title="Comment">
            <CommentIconOutline className="h-6 w-6" />
          </button>

          <div className="ml-2">{post.comments}</div>

          <LikeButton post={post} postId={post.id} />

          <div className="ml-2">{post.likes}</div>
        </div>
      </article>
      <Divider />
    </>
  )
}

interface LikeButtonProps {
  post: PostModel
  postId: number
}

const LikeButton = ({ post, postId }: LikeButtonProps) => {
  const { isLiked, mutateIsPostLiked } = useIsPostLiked(postId)
  const { loggedOut } = useCurrentUser()
  const router = useRouter()
  const { mutate } = useSWRConfig()

  const likePost = async () => {
    await axios.post(`/likes/post/${postId}`)
    return { ...post, likes: post.likes + 1 }
  }

  const unlikePost = async () => {
    await axios.delete(`/likes/post/${postId}`)
    return { ...post, likes: post.likes - 1 }
  }

  const handleClick = async () => {
    if (loggedOut) {
      router.push('/sign')
    } else {
      if (!isLiked) {
        let updatedPost = { ...post, likes: post.likes + 1 }
        mutate(`/active-posts/${postId}`, likePost(), {
          optimisticData: updatedPost,
          rollbackOnError: true
        })
        mutateIsPostLiked(true, false)
      } else {
        let updatedPost = { ...post, likes: post.likes - 1 }
        mutate(`/active-posts/${postId}`, unlikePost(), {
          optimisticData: updatedPost,
          rollbackOnError: true
        })
        mutateIsPostLiked(false, false)
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
