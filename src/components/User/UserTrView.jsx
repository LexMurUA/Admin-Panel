import { Button, Input } from '@mui/joy/';

import { NavLink } from 'react-router-dom';
import './UserTrView.scss';
import { UserForm } from '../userForm/userForm';
import { UseUsersContext } from '../../context/users/context';
import { deleteUser } from '../../features/users/usersSlise';
import {  ModalWindow } from '../Modal/ModalWindow';



export const UserTrView = ({ id, login, password, email, component }) => {
  const { change, setChange, dispatch, setModalStatus, setSelectedId } = UseUsersContext()  
  
 
  const changeEditor = () => {
    !change ? setChange(true) : setChange(false)
  }
  const deleteWarning = ()=>{
    setModalStatus(true)
    setSelectedId(id)
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
          <td><Button onClick={deleteWarning} size="sm" color='danger'>X</Button></td>
        </>)
        : (<td><Button type={change ? 'submit':'button'} onClick={change? undefined : changeEditor} size="sm" color={change ? 'success' : 'warning'}>{change ? 'Зберегти' : 'Редагувати'}</Button></td>)}

    </tr>
     
   
  )
}
