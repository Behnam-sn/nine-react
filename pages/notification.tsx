import type { NextPage } from 'next'

import { BellIcon } from '@/components/icons/BellIcon'

const Notification: NextPage = ({}) => {
  return (
    <main className="mt-52">
      <BellIcon className="mx-auto w-20 fill-primary-900 transition-colors duration-300 dark:fill-primary-100" />
      <div className="mt-4 text-center text-xl text-primary-900 transition-colors duration-300 dark:text-primary-100">
        Nothing yet
      </div>
    </main>
  )
}

export default Notification
