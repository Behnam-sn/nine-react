import type { NextPage } from 'next'

const Search: NextPage = () => {
  return (
    <main>
      <div className="mx-8 pt-4">
        <input
          type="text"
          className="w-full rounded-full bg-primary-300 px-3 py-2 text-primary-100 transition-colors duration-300 placeholder:text-primary-200 dark:bg-primary-500"
          placeholder="Search"
        />
      </div>
    </main>
  )
}

export default Search
