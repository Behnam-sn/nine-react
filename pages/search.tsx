import type { NextPage } from 'next'

interface Props {}

const Search: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="mx-8 pt-4">
        <input
          type="text"
          className="w-full rounded-full bg-secondary-500 px-3 py-2 text-primary-900 placeholder:text-primary-700"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default Search
