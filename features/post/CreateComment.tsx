import { Divider } from '@/components/Divider'
import { CreateCommentForm } from '@/components/forms/CreateCommentForm'
import { UserCircleIconOutline } from '@/components/icons/UserCircleIconOutline'
import { useCurrentUser } from '@/hooks/useCurrentUser'

interface CreateCommentProps {
  postId: number
}

export const CreateComment = ({ postId }: CreateCommentProps) => {
  const { isLoading, loggedOut } = useCurrentUser()

  if (isLoading) return <></>
  if (loggedOut) return <></>

  return (
    <>
      <div className="flex p-4">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
          <UserCircleIconOutline className="h-9 w-9 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
        </div>
        <CreateCommentForm postId={postId} />
      </div>
      <Divider />
    </>
  )
}
