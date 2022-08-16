import axios from 'axios'

import type { UserCreateModel } from '@/models/user.model'
import { setCookie } from '@/utils/cookie'

export const SignIn = async (username: string, password: string) => {
  const User = new FormData()
  User.append('username', username)
  User.append('password', password)

  await axios
    .post('auth/signin', User)
    .then(response => {
      let token = response.data.access_token
      setCookie('token', token, 7)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    })
    .catch(error => {
      console.log(error)
    })
}

export const SignUp = async (values: UserCreateModel) => {
  await axios
    .post('auth/signup', values)
    .then(response => {
      if (response.status == 200) {
        SignIn(values.username, values.password)
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const SignOut = () => {
  document.cookie = 'jwt_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  axios.defaults.headers.common['Authorization'] = ''
}
