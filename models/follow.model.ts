import { OwnerModel } from '@/models/user.model'

export interface FollowModel {
  id: number
  follower_id: number
  following_id: number
  is_follower_active: boolean
  is_following_active: boolean

  follower: OwnerModel
  following: OwnerModel
}
