import { useState } from 'react'
import './App.scss'
import { Admins } from './pages/admins/Admins'
import { Header } from './layout/Header/Header'
import { Footer } from './layout/Footer/Footer'
import { Main } from './layout/Main/Main'
import { Outlet } from 'react-router-dom'
import { UsersContextProvider } from './context/users/context'

function App() {


  return (
    <>
      <Header />
      <Main>
        <UsersContextProvider>
          <Outlet />
        </UsersContextProvider>
      </Main>
      <Footer />

    </>
  )
}

export default App
