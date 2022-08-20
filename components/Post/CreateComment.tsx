import { Divider } from '@/components/Divider'
import { CreateCommentForm } from '@/components/Forms/CreateCommentForm'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import { useCurrentUser } from '@/hooks/useCurrentUser'

interface CreateCommentProps {
  post_id: number
}

export const CreateComment = ({ post_id }: CreateCommentProps) => {
  const { currentUser, isLoading, loggedOut } = useCurrentUser()

  if (isLoading) return <></>
  if (loggedOut) return <></>

  return (
    <>
      <div className="flex p-4">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
          <UserCircleIcon className="h-9 w-9 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
        </div>
        <CreateCommentForm post_id={post_id} />
      </div>
      <Divider />
    </>
  )
}
