import Link from 'next/link'

import { Divider } from '@/components/Divider'

interface NavSectionProps {
  section: string
  post_id: number
}

export const NavSection = ({ section, post_id }: NavSectionProps) => {
  return (
    <>
      <nav className="flex">
        <Link href={`/posts/${post_id}`}>
          <a
            className={`my-3 ml-2 mr-1 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
              section === 'comments'
                ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
                : 'text-primary-900 dark:text-primary-100'
            }`}
          >
            Comments
          </a>
        </Link>

        <Link href={`/posts/${post_id}/likes`}>
          <a
            className={`my-3 ml-1 mr-2 flex w-full justify-center rounded-md py-2 font-semibold transition-colors duration-300 ${
              section === 'likes'
                ? 'bg-primary-300 text-primary-100 dark:bg-primary-600'
                : 'text-primary-900 dark:text-primary-100'
            }`}
          >
            Likes
          </a>
        </Link>
      </nav>

      <Divider />
    </>
  )
}
