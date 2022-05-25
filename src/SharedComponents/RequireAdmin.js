import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import Loading from './Loading'

export default function RequireAdmin({ children }) {
  const { user, isLoading, refetch } = useUser()
  useEffect(() => {
    refetch()
  }, [user, refetch])
  const navigate = useNavigate()


  isLoading && <Loading />

  if (user.admin) {
    return children
  }
  else {
    navigate('/dashboard')
  }

}
