import React from 'react'
import { node, object, string } from 'prop-types'
import classNames from 'classnames'

import { wrapper } from './VisuallyHidden.module.scss'

const VisuallyHidden = ({ children, className, theme = {} }) => {
  if (!children) return null

  return (
    <span className={classNames(wrapper, className, theme.wrapper)}>
      {children}
    </span>
  )
}

VisuallyHidden.propTypes = {
  children: node,
  className: string,
  theme: object
}

export { VisuallyHidden }
