import { OwnerModel } from '@/models/user.model'

export interface PostModel {
  id: number
  text: string
  likes: number
  comments: number
  owner_id: number
  is_modified: boolean
  is_active: boolean
  created_at: string
  modified_at: string

  owner: OwnerModel
}

// export interface PostLike {
//   id: number
//   post_id: number
//   owner_id: number
//   created_at: string
// }

export interface PostCreateModel {
  text: string
}
