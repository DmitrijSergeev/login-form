import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './button.module.scss'

type ButtonProps = ComponentPropsWithoutRef<'button'>
export const Button = forwardRef(() => {
  return <button type={'button'} />
})
