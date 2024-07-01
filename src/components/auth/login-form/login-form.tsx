import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  //console.log(register('email'))

  const {
    field: { disabled, name, onBlur, onChange, ref, value },
  } = useController({ control, name: 'rememberMe' })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <TextField {...register('email')} label={'Email'} />
      <TextField {...register('password')} label={'Password'} />
      <Checkbox
        checked={value}
        disabled={disabled}
        label={'rememberMe'}
        name={name}
        onBlur={onBlur}
        onCheckedChange={onChange}
        ref={ref}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
