import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface ThemeContextProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
  children?: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
