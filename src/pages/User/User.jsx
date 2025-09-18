import { Table } from '@mui/joy/';
import { useParams } from 'react-router-dom';
import { UserTrView } from '../../components/User/UserTrView';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser } from '../../features/users/usersSlise';
import { UseUsersContext } from '../../context/users/context';

export const User = () => {
  const { change, setChange, currentUser, setCurrentUser, methodsAddUser } = UseUsersContext()
  
  const dispatch = useDispatch()
  const { list } = useSelector(state => state.users)
  const { id } = useParams()
 
  const { handleSubmit } = methodsAddUser
  const user = list.find(user => (user.id === id))
  const component = 'userView'

  const onSubmit = (data) => {
      const {login,password,email} = data
      dispatch(changeUser({id,login,password,email}))
      setChange(false)
  }
  return (
    <section className='main-users-user'>
        <form id='userAddForm' onSubmit={handleSubmit(onSubmit)}>
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
            <UserTrView {...user} component={component} />

          </tbody>
        </Table>
      </form>

    </section >
  )
}
