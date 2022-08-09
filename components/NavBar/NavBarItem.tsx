interface Props {
  children: React.ReactNode
}

export const NavBarItem = ({ children }: Props) => {
  return (
    <div className="fill-secondary-900 transition-colors duration-300 dark:fill-primary-900">
      {children}
    </div>
  )
}
