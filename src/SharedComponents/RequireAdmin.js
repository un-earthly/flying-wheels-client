import useUser from '../Hooks/useUser'
import Loading from './Loading'

export default function RequireAdmin({ children }) {
  const { user, isLoading } = useUser()


  isLoading && <Loading />

  if (!user.Admin) {
    return 'Un Authorized'
  }
  else {
    return children
  }

}
