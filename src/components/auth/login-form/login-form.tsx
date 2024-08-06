import { useForm } from 'react-hook-form'

import s from './login-form.module.scss'

type LoginFormProps = {
  password?: string
  rememberMe?: boolean
  userName?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const {} = props
  const { handleSubmit, register } = useForm<LoginFormProps>()

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
          <input className={s.input} id={'user'} {...register('userName')} type={'email'} />
        </div>
        <div>
          <label className={s.label} htmlFor={'password'}>
            password
          </label>
          <input className={s.input} id={'password'} {...register('password')} type={'password'} />
        </div>
        <div>
          <label className={s.label} htmlFor={'rememberMe'}>
            rememberMe
          </label>
          <input
            className={s.input}
            id={'rememberMe'}
            {...register('rememberMe')}
            type={'checkbox'}
          />
        </div>
        <button className={s.button} type={'submit'}>
          send
        </button>
      </form>
    </div>
  )
}
