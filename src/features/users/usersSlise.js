import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  list: [
    {
      "id": "1",
      "login": "alex123",
      "password": "qwertyPass1!",
      "email": "alex123@example.com"
    },
    
  ]

}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addToUsers: (state, action) => {
      state.list.push(action.payload)
    },
    changeUser: (state,action)=> {
      const {id,login,password,email} = action.payload
      const user = state.list.find(user=>user.id === id);
       if (user.login === login && user.password === password && user.email===email) return
      user.login = login;
      user.password = password;
      user.email = email
    },
    deleteUser:(state,action)=>{state.list = state.list.filter(user => user.id != action.payload)}
  }
})

export const { addToUsers, changeUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer