import { useDispatch, useSelector } from 'react-redux'
import './Users.scss'
import { UserTrView } from '../../components/UserTrView/UserTrView';
import { Table,Box, Button } from '@mui/joy/';
import { UseUsersContext } from '../../context/users/context';
import { useState } from 'react';
import { pagination } from '../../utils/pagination/globals';
import { ModalWindow } from '../../components/Modal/ModalWindow';
import { ControlPanel } from '../../components/ControlPanel/ControlPanel';


export const Users = () => {
  const { list, endIndex, startIndex, } = UseUsersContext()

  const component = 'usersView'
  const viewSide = pagination(list, startIndex, endIndex)
  const componentModal = 'forDelete'

  return (
    <section className='main-users'>

      <Table sx={{
        '& thead th': { textAlign: 'center' }
      }} /*sx={{
            '& thead th': { textAlign: 'center' },
            '& thead th:first-of-type, & tbody td:first-of-type': { width: '5vw' },
            '& thead th:last-of-type, & tbody td:last-of-type': { width: '8vw' },
            '& thead th:not(:first-of-type):not(:last-of-type), & tbody td:not(:first-of-type):not(:last-of-type)': { width: '15vw' },
          }} */ aria-label="basic table">
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
      <ControlPanel componentModal={componentModal} />
    </section>
  )
}
