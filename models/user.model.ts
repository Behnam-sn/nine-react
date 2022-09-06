export interface UserModel {
  id: number
  username: string
  name: string
  bio: string | null
  posts: number
  followers: number
  followings: number
  is_superuser: boolean
  is_active: boolean
  created_at: string
  modified_at: string
}

export interface OwnerModel {
  id: number
  username: string
  name: string
  is_superuser: boolean
}

// export interface AuthorModel {
//   id: number
//   username: string
//   name: string
//   is_superuser: boolean
// }
