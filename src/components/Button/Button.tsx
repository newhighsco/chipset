import React, { FC } from 'react'
import classNames from 'classnames'
import SmartLink from '../SmartLink'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({
  active,
  children,
  theme,
  className,
  setRef,
  ...rest
}) => {
  if (!children) return null

  return (
    <SmartLink
      className={classNames(theme?.root, active && theme?.active, className)}
      ref={setRef}
      {...rest}
    >
      <span className={theme?.content}>{children}</span>
    </SmartLink>
  )
}

Button.displayName = 'Button'

export default Button
