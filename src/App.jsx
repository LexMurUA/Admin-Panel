import { Outlet } from 'react-router-dom'
import './App.scss'
import { UsersContextProvider } from './context/users/context'
import { Main } from './layout/Main/Main'

function App() {

  return (
    <>
      <Main>
        <UsersContextProvider>
          <Outlet />
        </UsersContextProvider>
      </Main>
    </>
  )
}

export default App
