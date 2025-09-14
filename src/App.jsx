import { useState } from 'react'
import './App.scss'
import { Admins } from './pages/admins/Admins'
import { Header } from './layout/Header/Header'
import { Footer } from './layout/Footer/Footer'
import { Main } from './layout/Main/Main'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
     <Header />
      <Main>
        <Outlet/>
      </Main>
     <Footer />
    </>
  )
}

export default App
