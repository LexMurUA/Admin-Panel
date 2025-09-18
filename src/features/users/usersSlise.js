import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  list: [
    {
      "id": '1',
      "login": "alex123",
      "password": "qwertyPass1!",
      "email": "alex123@example.com"
    },
    {
      "id": '2',
      "login": "maria_k",
      "password": "securePass22$",
      "email": "maria.k@example.com"
    },
    {
      "id": '3',
      "login": "john_doe",
      "password": "john2025!@#",
      "email": "john.doe@example.com"
    },
    {
      "id": '4',
      "login": "irina89",
      "password": "IrinaPass_89",
      "email": "irina89@example.com"
    },
    {
      "id": '5',
      "login": "maxDev",
      "password": "MaxDev#2025",
      "email": "max.dev@example.com"
    }
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
      console.log(user);
      
       if (user.login === login && user.password === password && user.email===email) return
      user.login = login;
      user.password = password;
      user.email = email
    }
  }
})

export const { addToUsers,changeUser } = usersSlice.actions;

export default usersSlice.reducer