import { bool, func, node, object, oneOfType, shape, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
import SmartLink from '../SmartLink'

const Button = ({
  variant,
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
      className={classNames(
        theme?.root,
        variant && theme?.[variant],
        active && theme?.active,
        className
      )}
      ref={setRef}
      {...rest}
    >
      <span className={theme?.content}>{children}</span>
    </SmartLink>
  )
}

Button.displayName = 'Button'
Button.propTypes = {
  variant: string,
  active: bool,
  children: node,
  theme: shape({ root: string, active: string, variant: string }),
  setRef: oneOfType([func, object]),
  className: string
}

export default Button
