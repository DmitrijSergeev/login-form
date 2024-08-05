import { useForm } from 'react-hook-form'

import s from './login-form.module.scss'

export const LoginForm = () => {
  const { handleSubmit, register } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  //console.log(register('user'))

  return (
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <div>
          <label className={s.label} htmlFor={'user'}>
            username
          </label>
          <input className={s.input} id={'user'} {...register('user')} />
        </div>
        <div>
          <label className={s.label} htmlFor={'password'}>
            password
          </label>
          <input className={s.input} id={'password'} {...register('password')} />
        </div>
        <button className={s.button} type={'submit'}>
          send
        </button>
      </form>
    </div>
  )
}
