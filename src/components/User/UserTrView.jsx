import { Button, Input } from '@mui/joy/';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './UserTrView.scss';
import { UserForm } from '../userForm/userForm';
import { UseUsersContext } from '../../context/users/context';


export const UserTrView = ({ id, login, password, email, component }) => {
  const {change,setChange,currentUser} = UseUsersContext()  


  const changeEditor = () => {
    !change ? setChange(true) : setChange(false)
  }

  return (
    <tr className='user-tr'>
      <td>{id}</td>
      {change ? (
        <UserForm />
      )
        : (<>
          <td>{login}</td>
          <td>{password}</td>
          <td>{email}</td>
        </>)
      }

      {component === 'usersView' ? (
        <>
          <td><NavLink to={`/users/${id}`}><Button variant="soft" size="sm" color='primary'>Детальніше</Button></NavLink></td>
          <td><Button size="sm" color='danger'>X</Button></td>
        </>)
        : (<td><Button type={change ? 'submit':'button'} onClick={change? undefined : changeEditor} size="sm" color={change ? 'success' : 'warning'}>{change ? 'Зберегти' : 'Редагувати'}</Button></td>)}

    </tr>
  )
}
