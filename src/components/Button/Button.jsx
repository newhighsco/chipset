import React from 'react'
import { bool, node, shape, string } from 'prop-types'
import classNames from 'classnames'
import SmartLink from '../SmartLink'

const Button = ({ active, children, theme, className, ...rest }) => {
  if (!children) return null

  return (
    <SmartLink
      className={classNames(theme?.root, active && theme?.active, className)}
      {...rest}
    >
      <span className={theme?.content}>{children}</span>
    </SmartLink>
  )
}

Button.displayName = 'Button'
Button.propTypes = {
  active: bool,
  children: node,
  theme: shape({ root: string, active: string }),
  className: string
}

export default Button
