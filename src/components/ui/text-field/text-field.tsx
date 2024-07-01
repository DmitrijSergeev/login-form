import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  forwardRef,
  useRef,
  useState,
} from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { Close, Eye, Search, VisibilityOff } from '../../../assets'
import { Typography } from '../../ui/typography'

type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onChangeValue?: (value: string) => void
  onClearInput?: () => void
  onPressEnter?: ComponentPropsWithoutRef<'input'>['onKeyDown']
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
      onChangeValue,
      onClearInput,
      onPressEnter,
      placeholder,
      type,
      ...rest
    },
    ref
  ) => {
    //const [showPassword, setShowPassword] = useState(false)
    const showPassword = false
    const [revealPassword, setRevealPassword] = useState(false)
    const isSearchField = type === 'search'
    const isClearInputButtonShown = isSearchField
    const inputType = type === 'password' && showPassword ? 'text' : type
    const isRevealPasswordButtonShown = type === 'password'
    const internalRef = useRef<HTMLInputElement>(null)

    function handleToggleShowPassword() {
      setRevealPassword((prevState: boolean) => !prevState)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
    }

    const handlePressOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onPressEnter?.(e)
      }
    }

    function handleClearInput() {
      if (onClearInput) {
        return onClearInput()
      }

      if (!internalRef.current) {
        return
      }
      internalRef.current.value = ''
      onChangeValue?.('')
    }

    const classNames = {
      error: clsx(s.error),
      field: clsx(s.field, !!errorMessage && s.error, isSearchField && s.hasLeadingIcon, className),
      fieldContainer: clsx(s.fieldContainer),
      label: clsx(s.label, labelProps?.className),
      leadingIcon: s.leadingIcon,
      root: clsx(s.root, containerProps?.className),
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
          <input
            className={classNames.field}
            onChange={handleChange}
            onKeyDown={handlePressOnEnter}
            placeholder={placeholder}
            ref={ref}
            type={inputType}
            {...rest}
          />
          {isRevealPasswordButtonShown && (
            <button className={s.showpassword} onClick={handleToggleShowPassword} type={'button'}>
              {revealPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
          {isClearInputButtonShown && (
            <button className={s.clearInput} onClick={handleClearInput} type={'button'}>
              <Close height={16} width={16} />
            </button>
          )}
        </div>
        <Typography className={classNames.error} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)
