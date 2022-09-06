import { OwnerModel } from '@/models/user.model'

export interface LikeModel {
  id: number
  post_id: number | null
  comment_id: number | null
  owner_id: number
  is_post_active: boolean
  is_post_owner_active: boolean
  is_comment_active: boolean
  is_comment_owner_active: boolean
  is_owner_active: boolean
  created_at: string

  owner: OwnerModel
}
