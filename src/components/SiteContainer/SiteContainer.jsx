import React from 'react'
import { node, shape, string } from 'prop-types'
import classNames from 'classnames'
import Element from '../Element'

/**
 * The `SiteContainer` stretches to fill the height of the viewport
 */
const SiteContainer = ({ children, theme, className, ...rest }) => {
  if (!children) return null

  return (
    <Element className={classNames(theme?.root, className)} {...rest}>
      {children}
    </Element>
  )
}

SiteContainer.propTypes = {
  children: node,
  theme: shape({ root: string }),
  className: string
}

export default SiteContainer
