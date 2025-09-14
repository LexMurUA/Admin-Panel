import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store.js'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            
          </Route>
        </Routes>
        </BrowserRouter>
        
      </PersistGate>
    </Provider>
  </StrictMode>,
)
