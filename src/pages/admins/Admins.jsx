import { useDispatch, useSelector } from 'react-redux'


export const Admins = () => {
  const dispatch = useDispatch()
  const {list}= useSelector(state=>state.admins)
console.log(list);


  return (
    <div>Admins</div>
  )
}
