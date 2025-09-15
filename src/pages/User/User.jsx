import { Table } from '@mui/joy/';
import { useParams } from 'react-router-dom';
import { UserTrView } from '../../components/User/UserTrView';
import { useSelector } from 'react-redux';

export const User = () => {
  const {list}=useSelector(state=>state.users)
  const {id} = useParams()
  console.log(id);
  
  const user = list.find(user=>(user.id === id))
   
   
  const component = 'userView'
  return (
    <section className='main-users-user'>
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
    </section>
  )
}
