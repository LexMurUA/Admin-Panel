import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  authToken : false
}

export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    isAuth:(state)=>{
      state.authToken = true
    },
    isNotAuth:(state)=>{
      state.authToken = false
    }
  }
})

export const {isAuth,isNotAuth}= authSlice.actions;

export default authSlice.reducer