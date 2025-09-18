import { useDispatch, useSelector } from 'react-redux'
import './Users.scss'
import { UserTrView } from '../../components/User/UserTrView';
import { Table } from '@mui/joy/';


export const Users = () => {
 
  
  const { list } = useSelector(state => state.users)
  const component = 'usersView'

 
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
                list.map(user => (
                  <UserTrView key={user.id} {...user} component={component} />
                ))
              }

            </tbody>
          </Table>
   
    </section>
  )
}
