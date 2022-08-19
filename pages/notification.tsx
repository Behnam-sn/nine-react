import type { NextPage } from 'next'

import { BellIcon } from '@/components/icons/BellIcon'

const Notification: NextPage = () => {
  return (
    <main className="mt-52">
      <BellIcon className="mx-auto h-32 w-32 stroke-1" />
      <div className="mt-4 text-center text-xl">Nothing yet</div>
    </main>
  )
}

export default Notification
