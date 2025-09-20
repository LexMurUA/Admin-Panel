import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store.js'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/login/Login.jsx'
import { Users } from './pages/users/Users.jsx'
import { ProtectedRoute } from './features/auth/ProtectedRoute.jsx'
import { User } from './pages/User/User.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Admin-Panel">
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Login />} />
            <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
              <Route path='/users/:id' element={<ProtectedRoute><User /> </ProtectedRoute>} />
          </Route>
        </Routes>
        </BrowserRouter>
        
      </PersistGate>
    </Provider>
  </StrictMode>,
)
