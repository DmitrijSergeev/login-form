import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import * as React from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TextProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TextProps<T>) => {
  const { as: Component = 'p', className, variant = 'body2', ...rest } = props

  const classNames = clsx(s[variant], className ?? '')
  // const Component = as || 'p'

  return <Component {...rest} className={classNames} />
}
