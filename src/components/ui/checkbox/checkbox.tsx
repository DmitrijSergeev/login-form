import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/assets/icons'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { Typography } from '../../ui/typography'

export type CheckboxProps = {
  checked?: boolean
  label?: string
  position?: 'left'
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, className, disabled, id, label, position, required, ...rest }, ref) => {
    const classNames = {
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
      container: clsx(s.container, className),
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled),
      root: s.root,
    }

    return (
      <div className={classNames.container}>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              id={id}
              ref={ref}
              required={required}
              {...rest}
            >
              {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </div>
    )
  }
)
