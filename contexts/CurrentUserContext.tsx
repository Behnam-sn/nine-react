import { createContext, useContext } from 'react'

import { useCurrentUser } from '@/hooks/useCurrentUser'
import { UserModel } from '@/models/user.model'

interface CurrentUserContextProps {
  currentUser: UserModel
  currentUserIsLoading: boolean
  loggedOut: any
}

export const CurrentUserContext = createContext({} as CurrentUserContextProps)

export const useCurrentUserContext = () => useContext(CurrentUserContext)

interface CurrentUserProviderProps {
  children?: React.ReactNode
}

export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const {
    currentUser,
    isLoading: currentUserIsLoading,
    loggedOut
  } = useCurrentUser()

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, currentUserIsLoading, loggedOut }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}
