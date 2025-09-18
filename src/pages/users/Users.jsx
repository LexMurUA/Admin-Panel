import { useDispatch, useSelector } from 'react-redux'
import './Users.scss'
import { UserTrView } from '../../components/User/UserTrView';
import { Table } from '@mui/joy/';
import { UseUsersContext } from '../../context/users/context';
import { useState } from 'react';
import { pagination } from '../../utils/pagination/globals';
import { ModalWindow } from '../../components/Modal/ModalWindow';


export const Users = () => {
  const { list, endIndex, setEndIndex, perPage, startIndex, } = UseUsersContext()

  const component = 'usersView'
  const viewSide = pagination(list, startIndex, endIndex)
  const componentModal = 'forDelete'

 
 

  return (
    <section className='main-users'>

      <Table sx={{ '& thead th': { textAlign: 'center', } }} aria-label="basic table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Користувач</th>
            <th>Пароль</th>
            <th>Пошта</th>
            <th>Профіль</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {
            viewSide.map(user => (
              <UserTrView key={user.id} {...user} component={component} />
            ))
          }

        </tbody>
      </Table>
      <button onClick={()=>setEndIndex(prev=>prev+perPage)}>відкрити щє</button>
      <ModalWindow componentModal={componentModal}  />
    </section>
  )
}
