import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { FormCheckbox } from '../../ui/checkbox/form-checkbox/form-checkbox'
import { TextField } from '../../ui/text-field'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type Props = {
  onSubmit: (data: FormValues) => void
}
type FormValues = z.infer<typeof loginSchema>

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  // const {
  //   field: { disabled, name, onBlur, onChange, ref, value },
  // } = useController({ control, name: 'rememberMe' })

  return (
    <form
      onSubmit={handleSubmit(data => {
        onSubmit(data)
      })}
    >
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
      <FormCheckbox control={control} label={'rememberMe'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
