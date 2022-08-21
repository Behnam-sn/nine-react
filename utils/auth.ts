import axios from 'axios'

import { setCookie } from '@/utils/cookie'

export const signOut = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  axios.defaults.headers.common['Authorization'] = ''
}

export const setToken = (token: string) => {
  setCookie('token', token, 7)
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
