import { Input } from '@mui/joy';
import { useFormContext } from 'react-hook-form'
import { emailValidate, passwordValidate } from '../../constants/formValidate';
import { UseUsersContext } from '../../context/users/context';


export const UserForm = () => {
  const {getUser,id,list} = UseUsersContext()
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useFormContext()
 
  const user = getUser(list,id)
 


  return (

    <>
      <td>
        <Input {...register("login", {
          required: "Логін обов'язково",
          maxLength: { value: 20, message: "Не більше 20 символів" }
        })}
          placeholder='Логін'
          defaultValue={user.login}
        />
        {errors.login && <p>{errors.login.message}</p>}

      </td>

      <td>
        <Input {...register("password", {
          required: "Пароль обов'язково",
          maxLength: { value: 20, message: "Не більше 20 символів" },
          minLength: { value: 5, message: "Мінімум 5 символів" },
          pattern: { value: passwordValidate, message: "Некоректний пароль" }
        })} 
          placeholder='Пароль'
          defaultValue={user.password}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </td>

      <td>
        <Input {...register("email", {
          required: "Пошта обов'язкова",
          maxLength: { value: 20, message: "Не більше 20 символів" },
          pattern: { value: emailValidate, message: "Некоректна пошта" }
        })} 
          placeholder='Пошта'
          defaultValue={user.email}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </td>
    </>

  )
}
