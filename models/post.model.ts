import { OwnerModel } from '@/models/user.model'

export interface PostModel {
  id: number
  text: string
  likes: number
  comments: number
  owner_id: number
  is_modified: boolean
  is_active: boolean
  is_owner_active: boolean
  created_at: string
  modified_at: string

  owner: OwnerModel
}

export interface PostCreateModel {
  text: string
}
