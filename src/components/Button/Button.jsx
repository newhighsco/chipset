import React from 'react'
import { bool, node, object, string } from 'prop-types'
import classNames from 'classnames'
import { SmartLink } from '../SmartLink/SmartLink'

const Button = ({ active, children, theme, className, ...rest }) => {
  if (!children) return null

  return (
    <SmartLink
      className={classNames(theme?.item, active && theme?.active, className)}
      {...rest}
    >
      <span className={theme?.content}>{children}</span>
    </SmartLink>
  )
}

Button.propTypes = {
  active: bool,
  children: node,
  theme: object,
  className: string
}

const ButtonGroup = ({ children, theme, className }) => {
  if (!children) return null

  return <div className={classNames(theme?.wrapper, className)}>{children}</div>
}

ButtonGroup.propTypes = {
  children: node,
  theme: object,
  className: string
}

export { Button, ButtonGroup }
