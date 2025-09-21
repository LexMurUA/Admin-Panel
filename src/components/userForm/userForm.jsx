import { Input } from '@mui/joy';
import { useFormContext } from 'react-hook-form';
import { emailValidate, passwordValidate } from '../../constants/formValidate';
import { UseUsersContext } from '../../context/users/context';

export const UserForm = ({ componentModal }) => {

  const { getUser, id, list } = UseUsersContext()
  const { register, formState: { errors } } = useFormContext()

  const user = getUser(list, id)

  return (

    <>
      <td>
        <Input sx={{ width: '20vw', fontSize: '1.8vw' }} {...register("login", {
          required: "Логін обов'язково",
          maxLength: { value: 20, message: "Не більше 20 символів" }
        })}
          placeholder={componentModal ? 'Логін' : user.login}
        />
        {errors.login && <p>{errors.login.message}</p>}

      </td>

      <td>
        <Input sx={{ width: '20vw', fontSize: '1.8vw' }} {...register("password", {
          required: "Пароль обов'язково",
          maxLength: { value: 20, message: "Не більше 20 символів" },
          minLength: { value: 5, message: "Мінімум 5 символів" },
          pattern: { value: passwordValidate, message: "Некоректний пароль" }
        })}
          placeholder={componentModal ? 'Пароль' : user.password}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </td>

      <td>
        <Input sx={{ width: '20vw', fontSize: '1.8vw' }} {...register("email", {
          required: "Пошта обов'язкова",
          maxLength: { value: 20, message: "Не більше 20 символів" },
          pattern: { value: emailValidate, message: "Некоректна пошта" }
        })}
          placeholder={componentModal ? 'Пошта' : user.email}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </td>
    </>

  )
}
