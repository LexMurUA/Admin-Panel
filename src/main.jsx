import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App.jsx'
import { persistor, store } from './app/store.js'
import { ProtectedRoute } from './features/auth/ProtectedRoute.jsx'
import './index.scss'
import { Login } from './pages/login/Login.jsx'
import { User } from './pages/User/User.jsx'
import { Users } from './pages/users/Users.jsx'



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
