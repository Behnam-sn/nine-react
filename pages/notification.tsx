import type { NextPage } from 'next'

import { BellIconOutline } from '@/components/icons/BellIconOutline'

const Notification: NextPage = () => {
  return (
    <main className="mt-52">
      <BellIconOutline className="mx-auto h-32 w-32 stroke-1" />
      <div className="mt-4 text-center text-xl">Nothing yet</div>
    </main>
  )
}

export default Notification
