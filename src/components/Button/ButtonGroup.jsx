import React from 'react'
import { node, object, string } from 'prop-types'
import classNames from 'classnames'

const ButtonGroup = ({ children, theme, className }) => {
  if (!children) return null

  return <div className={classNames(theme?.group, className)}>{children}</div>
}

ButtonGroup.propTypes = {
  children: node,
  theme: object,
  className: string
}

export default ButtonGroup
