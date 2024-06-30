import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { Eye, Search, VisibilityOff } from '../../../assets'
import { Typography } from '../../ui/typography'

type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      id,
      label,
      labelProps,
      onChange,
      placeholder,
      type,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [revealPassword, setRevealPassword] = useState(false)
    const isSearchField = type === 'search'
    const inputType = type === 'password' && showPassword ? 'text' : type
    const isRevealPasswordButtonShown = type === 'password'

    const classNames = {
      error: clsx(s.error),
      field: clsx(s.field, !!errorMessage && s.error, isSearchField && s.hasLeadingIcon, className),
      fieldContainer: clsx(s.fieldContainer),
      label: clsx(s.label, labelProps?.className),
      leadingIcon: s.leadingIcon,
      root: clsx(s.root, containerProps?.className),
    }

    function handleToggleShowPassword() {
      setRevealPassword((prevState: boolean) => !prevState)
    }

    return (
      <div {...containerProps} className={classNames.root}>
        {label && (
          <Typography as={'label'} variant={'body2'} {...labelProps}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {isSearchField && <Search className={classNames.leadingIcon} />}
          <input type={inputType} />
          {isRevealPasswordButtonShown && (
            <button className={s.showPassword} onClick={handleToggleShowPassword} type={'button'}>
              {revealPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
          <button type={'button'}>x</button>
        </div>
        <Typography className={classNames.error} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)
