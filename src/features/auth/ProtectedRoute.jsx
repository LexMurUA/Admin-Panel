
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
  const { authToken } = useSelector(state => state.auth)
  
  if (!authToken) return <Navigate to="/" />
  return children
  
}
