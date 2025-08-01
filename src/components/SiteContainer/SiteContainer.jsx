import { node, shape, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
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

SiteContainer.displayName = 'SiteContainer'
SiteContainer.propTypes = {
  children: node,
  theme: shape({ root: string }),
  className: string
}

export default SiteContainer
