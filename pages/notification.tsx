import type { NextPage } from 'next'

import { BellIcon } from '@/components/icons/BellIcon'

const Notification: NextPage = ({}) => {
  return (
    <main className="mt-52">
      <BellIcon className="mx-auto w-20 fill-secondary-900 transition-colors duration-300 dark:fill-primary-900" />
      <div className="mt-4 text-center text-xl text-secondary-900 transition-colors duration-300 dark:text-primary-900">
        Nothing yet
      </div>
    </main>
  )
}

export default Notification
