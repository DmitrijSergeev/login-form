import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import s from './form-checkbox.module.scss'

import { Checkbox, CheckboxProps } from '../../../ui/checkbox'

type FormCheckboxProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'checked' | 'name' | 'onBlur' | 'onCheckedChange' | 'ref'
> &
  UseControllerProps<T>

export const FormCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  ...rest
}: FormCheckboxProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({ control, disabled, name })

  return (
    <Checkbox
      checked={value}
      disabled={disabled}
      label={'rememberMe'}
      name={name}
      onBlur={onBlur}
      onCheckedChange={onChange}
      ref={ref}
      {...rest}
    />
  )
}
