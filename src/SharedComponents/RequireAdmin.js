import { useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import Loading from './Loading'

export default function RequireAdmin({ children }) {
  const { user, isLoading } = useUser()
  const navigate = useNavigate()


  isLoading && <Loading />

  if (user.Admin) {
    return children
  }
  else {
    navigate('/dashboard')
  }

}
