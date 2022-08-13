import { CommentModel } from '@/models/comment.model'
import { PostModel } from '@/models/post.model'

export interface UserModel {
  id: number
  username: string
  name: string
  bio: string | null
  is_active: boolean
  is_superuser: boolean
  created_at: string
  modified_at: string
  posts: [PostModel]
  comments: [CommentModel]
  likes: []
  followers: []
  followings: []
}

export interface AuthorModel {
  id: number
  username: string
  name: string
}
