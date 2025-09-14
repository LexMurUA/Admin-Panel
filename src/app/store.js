import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminsReducer from '../features/admins/adminsSlice'
import authReducer from '../features/auth/authSlice'
import usersReducer from '../features/users/usersSlise'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { version } from 'react';


const rootReducer = combineReducers({
  admins: adminsReducer,
  auth: authReducer,
  users: usersReducer
})

const persistConfig = ({
  key: 'root',
  storage,
  whitelist: ['auth','users'],
  blacklist:['admins'],
  version: 1
})

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:{
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store)