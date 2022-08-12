export interface CommentModel {
  id: number
  text: string
  post_id: number
  owner_id: number
  is_edited: boolean
  is_active: boolean
  created_at: string
  modified_at: string
  likes: []
}
