import axios from 'axios'

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

export const SignUp = async () => {}

export const SignOut = () => {}
