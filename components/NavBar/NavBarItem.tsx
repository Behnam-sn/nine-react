import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactNode
}

export const NavBarItem = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <a className="text-primary-900 transition-colors duration-300 dark:text-primary-100">
        {children}
      </a>
    </Link>
  )
}
