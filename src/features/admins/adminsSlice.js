import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  list: [{id:1, login: '1', password: '1', email: '1@gmail.com' },]
}

export const adminsSlise = createSlice({
  name: 'admins',
  initialState,
  reducers: {
    addToAdmin: (state, action) => {
      state.list.push(action.payload)
    }
  }
})

export const { addToAdmin } = adminsSlise.actions;

export default adminsSlise.reducer