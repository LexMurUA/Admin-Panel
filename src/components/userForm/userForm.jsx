import { useForm } from 'react-hook-form'


export const UserForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm()

  const onSubmit = (data) => {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input {...register("login", {
        required: "Логін обов'язково",
        maxLength: { value: 20, message: "Не більше 20 символів" }
      })}
        placeholder='Логін'
      />
      {errors.login && <p>{errors.login.message}</p>}

      <input {...register("password", {
        required: "Пароль обов'язково",
        maxLength: { value: 20, message: "Не більше 20 символів" },
        minLength: { value: 5, message: "Мінімум 5 символів" }б,
        pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Некоректний пароль" }
      })} />
      {errors.password && <p>{errors.password.message}</p>}

      <input {...register("email", { 
        required: "Пошта обов'язкова", 
        maxLength: { value: 20, message: "Не більше 20 символів" },
        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Некоректна пошта" }
        })} />
      {errors.email && <p>{errors.email.message}</p>}
        
    
    </form>
  )
}
