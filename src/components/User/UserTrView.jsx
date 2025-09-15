import { Button, Input } from '@mui/joy/';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './UserTrView.scss';


export const UserTrView = ({ id, login, password, email, component }) => {
  const [change, setChange] = useState(false)

  const changeEditor = () => {
    !change ? setChange(true) : setChange(false)
  }

  return (
    <tr className='user-tr'>
      <td>{id}</td>
      {change ? (
        <>
          <td><Input placeholder={login} /></td>
          <td><Input placeholder={password} /></td>
          <td><Input placeholder={email} /></td>

        </>)
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
        : (<td><Button onClick={changeEditor} size="sm" color={change ? 'success' : 'warning'}>{change ? 'Зберегти' : 'Редагувати'}</Button></td>)}

    </tr>
  )
}
