import type { CommentModel } from '@/models/comment.model'
import type { FollowModel } from '@/models/follow.model'
import type { LikeModel } from '@/models/like.model'
import type { PostModel } from '@/models/post.model'

export interface UserModel {
  id: number
  username: string
  name: string
  bio: string | null
  is_active: boolean
  is_superuser: boolean
  created_at: string
  modified_at: string
  posts: PostModel[]
  comments: CommentModel[]
  likes: LikeModel[]
  followers: [FollowModel]
  followings: [FollowModel]
}

export interface AuthorModel {
  id: number
  username: string
  name: string
  is_superuser: boolean
}

export interface UserCreateModel {
  username: string
  name: string
  password: string
}
