import { Button, Input } from '@mui/joy'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Login.scss'

import { useDispatch, useSelector } from 'react-redux'
import { UseUsersContext } from '../../context/users/context'
import { isAuth } from '../../features/auth/authSlice'


export const Login = () => {
  const { navigate } = UseUsersContext()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const dispatch = useDispatch()
  const { list } = useSelector(state => state.admins)
  const { authToken } = useSelector(state => state.auth)

  const [message, setMessage] = useState(null)




  useEffect(() => {
    if (authToken) {
      navigate('/users');
    }
  }, [authToken, navigate]);

  const onSubmit = (data) => {
    const { login, password } = data

    const user = list.find(admin => admin.login === login && admin.password === password && (admin))
    if (user) {
      setMessage({ type: 'success', text: `Ласкаво просимо ${login}` })
      dispatch(isAuth())
      navigate('/users')

    } else {
      setMessage({ type: 'error', text: 'Неверный логин или пароль' })
    }
  }

  return (
    <form className="container login-form" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="login">Login</label>
      <Input className='input-mui' id="login"{...register('login', { required: 'Введите логин' })} placeholder='Введіть 1' />
      {errors.login && <div className="error">{errors.login.message}</div>}

      <label htmlFor="password">Password</label>
      <Input className='input-mui' id="password" type="password"{...register('password', { required: 'Введите пароль' })} placeholder='Введіть 1' />
      {errors.password && <div className="error">{errors.password.message}</div>}

      <Button type="submit" color="warning" disabled={isSubmitting}>Увійти</Button>
      {message && (
        <div className={message.type === 'error' ? 'error' : 'success'}>{message.text}</div>
      )}
    </form>
  )
}                                              
