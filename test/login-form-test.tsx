import { useState } from 'react'

type LoginFormTestProps = {
  onSubmit: (data: { email: string; password: string; rememberMe: boolean }) => void
}
export const LoginFormTest = ({ onSubmit }: LoginFormTestProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rememberMe, setRememberMe] = useState<boolean>(false)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit({
          email,
          password,
          rememberMe,
        })
      }}
    >
      <input
        name={'email'}
        onChange={e => {
          setEmail(e.currentTarget.value)
        }}
        type={'email'}
        value={email}
      />
      <input
        name={'password'}
        onChange={e => {
          setPassword(e.currentTarget.value)
        }}
        type={'password'}
        value={password}
      />
      <input
        checked={rememberMe}
        name={'checkbox'}
        onChange={e => {
          setRememberMe(e.currentTarget.checked)
        }}
        type={'checkbox'}
      />

      <button type={'button'}>Sign In</button>
    </form>
  )
}
