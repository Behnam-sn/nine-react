export interface LikeModel {
  id: number
  post_id: number | null
  comment_id: number | null
  owner_id: number
  created_at: string
}
