import { Login } from '../../pages/login/Login'
import './Main.scss'

export const Main = ({children}) => {
  return (
    <main className='container'>
      {children}
    </main>
  )
}

