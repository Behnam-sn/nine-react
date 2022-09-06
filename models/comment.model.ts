import { OwnerModel } from '@/models/user.model'

export interface CommentModel {
  id: number
  text: string
  likes: number
  post_id: number
  owner_id: number
  is_modified: boolean
  is_active: boolean
  is_owner_active: boolean
  created_at: string
  modified_at: string

  owner: OwnerModel
}
