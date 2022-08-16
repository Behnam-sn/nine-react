import axios from 'axios'

import type { PostCreateModel } from '@/models/post.model'

export const CreatePost = async (values: PostCreateModel) => {
  axios.post('posts/', values).catch(error => {
    console.log(error)
  })
}
