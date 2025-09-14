import { useDispatch, useSelector } from 'react-redux'
import './Users.scss'
import { User } from '../../components/User/User';

export const Users = () => {
  const dispatch = useDispatch();
  const {list}= useSelector(state=>state.users)

  return (
    <section className='main-users'>
      {list.map(user=>(
        <User key={user.id} {...user} />
      
      ))}
    </section>
  )
}
