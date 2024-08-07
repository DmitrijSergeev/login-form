import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login-form.module.scss'

import { TextField } from '../../ui/text-field'

const loginShema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean(),
})

type LoginFormProps = z.infer<typeof loginShema>

export const LoginForm = (props: LoginFormProps) => {
  const {} = props
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormProps>({
    resolver: zodResolver(loginShema),
  })

  // const emailRegex =
  //   /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.root}>
          <label className={s.label} htmlFor={'email'}>
            email
          </label>
          <TextField className={s.input} id={'email'} {...register('email')} type={'email'} />
          {errors.email?.message && <p className={'text-red-500'}>{errors.email?.message}</p>}
        </div>
        <div>
          <label className={s.label} htmlFor={'password'}>
            password
          </label>
          <input className={s.input} id={'password'} {...register('password')} type={'password'} />
          {errors.password?.message && <p style={{ color: 'red' }}>{errors.password?.message}</p>}
        </div>
        <div className={s.checkbox}>
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
