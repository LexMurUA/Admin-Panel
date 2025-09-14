import './Login.scss'
import { Input, Button } from '@mui/joy'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)

  const onSubmit = (data) => {
    const { login, password } = data

 
    if (login === 'admin' && password === '123456') {
      setMessage({ type: 'success', text: 'Успешный вход' })
      navigate('/users')
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
      <Input id="password" type="password"{...register('password', { required: 'Введите пароль', minLength: { value: 6, message: 'Минимум 6 символов' } })} />
      {errors.password && <div className="error">{errors.password.message}</div>}

    <Button type="submit" color="warning" disabled={isSubmitting}>Войти</Button>
      {message && (
        <div className={message.type === 'error' ? 'error' : 'success'}>{message.text}</div>
      )}
    </form>
  )
}                                              
