import classNames from 'classnames'
import { node, shape, string } from 'prop-types'
import React from 'react'

const ButtonGroup = ({ children, theme, className }) => {
  if (!children) return null

  return <div className={classNames(theme?.group, className)}>{children}</div>
}

ButtonGroup.propTypes = {
  children: node,
  theme: shape({ group: string }),
  className: string
}

export default ButtonGroup
