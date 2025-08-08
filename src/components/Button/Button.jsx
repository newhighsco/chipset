import { bool, func, node, object, oneOfType, shape, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
import SmartLink from '../SmartLink'

const Button = ({ active, children, theme, className, setRef, ...rest }) => {
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
Button.propTypes = {
  active: bool,
  children: node,
  theme: shape({ root: string, active: string }),
  setRef: oneOfType([func, object]),
  className: string
}

export default Button
