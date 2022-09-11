import { BadgeIcon } from '@/components/icons/BadgeIcon'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import { UserModel } from '@/models/user.model'

interface UserProps {
  user: UserModel
}

export const User = ({ user }: UserProps) => {
  return (
    <div className="px-4">
      <div className="my-2 flex content-center">
        <div className="mr-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-900 transition-colors duration-300 dark:bg-primary-100">
            <UserCircleIcon className="h-20 w-20 text-primary-100 transition-colors duration-300 dark:text-primary-900" />
          </div>
        </div>
        <div className="flex w-full justify-around">
          <div className="my-auto text-center">
            <div className="font-bold">{user.posts}</div>
            <div className="text-sm font-light">Posts</div>
          </div>
          <div className="my-auto text-center">
            <div className="font-bold">{user.followers}</div>
            <div className="text-sm font-light">Followers</div>
          </div>
          <div className="my-auto text-center">
            <div className="font-bold">{user.followings}</div>
            <div className="text-sm font-light">Followings</div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-baseline">
          <div className="mr-1 text-3xl font-semibold">{user.name}</div>
          {user.is_superuser && (
            <BadgeIcon className="h-5 w-5 stroke-2 text-blue-500" />
          )}
        </div>
        <div className="mt-1 text-sm text-primary-300">{`@${user.username}`}</div>
        <div>{user.bio}</div>
      </div>

      {/* <Follow user={user} /> */}
    </div>
  )
}

// interface FollowProps {
//     user: UserModel
//   }

//   const Follow = ({ user }: FollowProps) => {
//     const [isDisabled, setIsDisabled] = useState(false)
//     const [isFollowing, setIsFollowing] = useState(false)
//     const { currentUser, isLoading, loggedOut } = useCurrentUser()
//     const { mutate } = useSWRConfig()

//     useEffect(() => {
//       if (currentUser) {
//         let found = currentUser.followings.find(follow => {
//           return follow.following_id === user.id
//         })

//         found ? setIsFollowing(true) : setIsFollowing(false)
//       }
//     }, [currentUser, user.id])

//     const handleClick = async () => {
//       setIsDisabled(true)

//       if (isFollowing) {
//         await axios
//           .delete(`/follows/${user.id}`)
//           .then(() => {
//             setIsDisabled(false)
//             mutate('/users/current-user')
//             mutate(`/users/${user.username}`)
//           })
//           .catch(error => {
//             console.log(error)
//           })
//       } else {
//         await axios
//           .post(`/follows/${user.id}`)
//           .then(() => {
//             setIsDisabled(false)
//             mutate('/users/current-user')
//             mutate(`/users/${user.username}`)
//           })
//           .catch(error => {
//             console.log(error)
//           })
//       }
//     }

//     if (isLoading) return <Spinner />
//     if (loggedOut) return <></>
//     if (currentUser.id === user.id) return <></>

//     return (
//       <button
//         className="my-4 w-full rounded-full bg-primary-900 py-2 font-bold text-primary-100 transition-colors duration-300 dark:bg-primary-100 dark:text-primary-900"
//         onClick={handleClick}
//         disabled={isDisabled}
//       >
//         {isFollowing ? 'Unfollow' : 'Follow'}
//       </button>
//     )
//   }
