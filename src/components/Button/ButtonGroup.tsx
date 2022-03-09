import React, { FC } from 'react'
import classNames from 'classnames'
import { ButtonGroupProps } from './Button.types'

const ButtonGroup: FC<ButtonGroupProps> = ({ children, theme, className }) => {
  if (!children) return null

  return <div className={classNames(theme?.group, className)}>{children}</div>
}

export default ButtonGroup
