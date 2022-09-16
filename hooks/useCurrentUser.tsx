// import { useEffect, useState } from 'react'
import useSWR from 'swr'

import { UserModel } from '@/models/user.model'
// import { signOut } from '@/utils/auth'
// import { getCookie } from '@/utils/cookie'

interface useCurrentUserProps {
  currentUser: UserModel
  isLoading: boolean
  loggedOut: any
}

export const useCurrentUser = () => {
  const { data, error } = useSWR('/users/current-user/')
  // const [token, setToken] = useState('')
  // const { data, error } = useSWR(token ? '/users/current-user/' : null)

  // useEffect(() => {
  //   setToken(getCookie(document.cookie, 'token'))
  // }, [])

  // useEffect(() => {
  //   if (error && error.status === 401) {
  //     signOut()
  //     setToken('')
  //   }
  // }, [error])

  return {
    currentUser: data,
    isLoading: !data && !error,
    // isLoading: token && !data && !error,
    loggedOut: error
  } as useCurrentUserProps
}
