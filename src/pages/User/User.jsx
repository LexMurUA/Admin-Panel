import { Table } from '@mui/joy/';
import { useSelector } from 'react-redux';
import { UserTrView } from '../../components/UserTrView/UserTrView';
import { UseUsersContext } from '../../context/users/context';
import { ControlPanel } from '../../components/ControlPanel/ControlPanel';
import { FormProvider, useForm } from 'react-hook-form';
import { forUser, userView } from '../../utils/pagination/globals';

export const User = () => {
  const { list, id, onSubmit, getUser, actionForm  } = UseUsersContext()
  const methodsAddUser = useForm()
  const { handleSubmit } = methodsAddUser
  const component = userView
  const componentModal = forUser

  return (
    <section className='main-users-user'>
      <FormProvider {...methodsAddUser}>
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
      </FormProvider >
      <ControlPanel componentModal={componentModal} />
    </section >
  )
}
