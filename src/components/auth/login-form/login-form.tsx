import { useController, useForm } from 'react-hook-form'

import { z } from 'zod'

import { Button } from '../../ui/button'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  //console.log(register('email'))

  const {
    field: { disabled, name, onBlur, onChange, ref, value },
  } = useController({ control, name: 'rememberMe' })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  console.log(value)

  return (
    <form onSubmit={onSubmit}>
      <TextField
        {...register('email', { minLength: { message: 'Too short', value: 8 } })}
        errorMessage={errors.email?.message}
        label={'Email'}
      />
      <TextField
        {...register('password', { minLength: { message: 'Too short', value: 8 } })}
        errorMessage={errors.password?.message}
        label={'Password'}
      />
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
