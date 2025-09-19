import { Table } from '@mui/joy/';
import { useSelector } from 'react-redux';
import { UserTrView } from '../../components/User/UserTrView';
import { UseUsersContext } from '../../context/users/context';
import { ControlPanel } from '../../components/ControlPanel/ControlPanel';


export const User = () => {
  const { list,methodsAddUser, id, onSubmit, getUser,actionForm } = UseUsersContext()

  const { handleSubmit } = methodsAddUser
  const component = 'userView'
  const componentModal = 'forUser'

  return (
    <section className='main-users-user'>
      <form id="userAddForm" onSubmit={handleSubmit((data) => onSubmit(data, actionForm))}>

        <Table sx={{ '& thead th': { textAlign: 'center', } }} aria-label="basic table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Користувач</th>
              <th>Пароль</th>
              <th>Пошта</th>
              <th>Профіль</th>

            </tr>
          </thead>
          <tbody>
            <UserTrView {...getUser(list, id)} component={component} />

          </tbody>
        </Table>
      </form>
      <ControlPanel componentModal={componentModal} />
    </section >
  )
}
