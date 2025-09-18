import { Input } from '@mui/joy';
import { useForm, useFormContext } from 'react-hook-form'


export const UserForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useFormContext()
 
 


  return (

    <>
      <td>
        <Input {...register("login", {
          required: "Логін обов'язково",
          maxLength: { value: 20, message: "Не більше 20 символів" }
        })}
          placeholder='Логін'
        />
        {errors.login && <p>{errors.login.message}</p>}

      </td>

      <td>
        <Input {...register("password", {
          required: "Пароль обов'язково",
          maxLength: { value: 20, message: "Не більше 20 символів" },
          minLength: { value: 5, message: "Мінімум 5 символів" },
          pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Некоректний пароль" }
        })} />
        {errors.password && <p>{errors.password.message}</p>}
      </td>

      <td>
        <Input {...register("email", {
          required: "Пошта обов'язкова",
          maxLength: { value: 20, message: "Не більше 20 символів" },
          pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Некоректна пошта" }
        })} />
        {errors.email && <p>{errors.email.message}</p>}
      </td>
    </>

  )
}
