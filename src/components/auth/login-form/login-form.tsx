import { FormEventHandler } from 'react'

import s from './login-form.module.scss'

export const LoginForm = () => {
  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    console.log(data)
  }

  return (
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <div>
          <label className={s.label} htmlFor={'user'}>
            username
          </label>
          <input className={s.input} id={'user'} name={'user'} required type={'email'} />
        </div>
        <div>
          <label className={s.label} htmlFor={'password'}>
            password
          </label>
          <input className={s.input} id={'password'} name={'password'} type={'password'} />
        </div>
        <button className={s.button} type={'button'}>
          send
        </button>
      </form>
    </div>
  )
}
