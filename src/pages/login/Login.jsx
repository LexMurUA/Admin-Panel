import './Login.scss'
import { Input, Button } from '@mui/joy'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth } from '../../features/auth/authSlice'


export const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const dispatch = useDispatch()
  const {list}= useSelector(state=>state.admins)
  const {authToken}=useSelector(state=>state.auth)
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  



  useEffect(() => {
    if (authToken) {
      navigate('/users');
    }
  }, [authToken, navigate]);

  const onSubmit = (data) => {
    const { login, password } = data
    
    const user = list.find(admin=>admin.login === login && admin.password ===password && (admin))
    if (user) {
      setMessage({ type: 'success', text: `Ласкаво просимо ${login}` })
      dispatch(isAuth())
      setTimeout(() => navigate('/users'),1500)
      
    } else {
      setMessage({ type: 'error', text: 'Неверный логин или пароль' })
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="login">Login</label>
      <Input id="login"{...register('login', { required: 'Введите логин' })} />
      {errors.login && <div className="error">{errors.login.message}</div>}

      <label htmlFor="password">Password</label>
      <Input id="password" type="password"{...register('password', { required: 'Введите пароль' })} />
      {errors.password && <div className="error">{errors.password.message}</div>}

    <Button type="submit" color="warning" disabled={isSubmitting}>Войти</Button>
      {message && (
        <div className={message.type === 'error' ? 'error' : 'success'}>{message.text}</div>
      )}
    </form>
  )
}                                              
