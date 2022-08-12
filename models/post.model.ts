import type { CommentModel } from '@/models/comment.model'

export interface PostModel {
  id: number
  text: string
  owner_id: number
  is_edited: boolean
  is_active: boolean
  created_at: string
  modified_at: string

  comments: [CommentModel]
  likes: [PostLike]
}

export interface PostLike {
  id: number
  post_id: number
  owner_id: number
  created_at: string
}
