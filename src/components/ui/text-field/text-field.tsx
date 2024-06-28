import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './text-field.module.scss'

import { Typography } from '../../ui/typography'

type TextFieldProps = ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef(() => {
  return (
    <div>
      <Typography as={'label'} variant={'body2'}>
        Hello
      </Typography>
    </div>
  )
})
