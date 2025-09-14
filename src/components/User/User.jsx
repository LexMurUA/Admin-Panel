import './User.scss'

export const User = ({id,login,password,email}) => {
  return (
    <div className='main-users-user'>
      {login}
    </div>
  )
}
