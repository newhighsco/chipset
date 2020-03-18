import React from 'react'
import { func, node, object, oneOfType, string } from 'prop-types'
import classNames from 'classnames'

import { wrapper } from './SiteContainer.module.scss'

const SiteContainer = ({
  element = 'div',
  children,
  className,
  theme = {},
  ...rest
}) => {
  if (!children) return null

  const Element = element

  return (
    <Element
      className={classNames(wrapper, className, theme.wrapper)}
      {...rest}
    >
      {children}
    </Element>
  )
}

SiteContainer.propTypes = {
  element: oneOfType([func, string]),
  children: node,
  className: string,
  theme: object
}

export { SiteContainer }
