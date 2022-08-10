export interface PostModel {
  id: number
  text: string
  owner_id: number
  is_edited: boolean
  is_active: boolean
  created_at: string
  modified_at: string

  comments: []
  likes: []
}
