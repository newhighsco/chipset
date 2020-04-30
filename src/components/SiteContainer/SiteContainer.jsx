import React from 'react'
import { node, shape, string } from 'prop-types'
import { Element } from '../Element'

/**
 * The `SiteContainer` stretches to fill the height of the viewport
 */
const SiteContainer = ({ children, theme, ...rest }) => {
  if (!children) return null

  return (
    <Element className={theme?.wrapper} {...rest}>
      {children}
    </Element>
  )
}

SiteContainer.propTypes = {
  children: node,
  theme: shape({ wrapper: string })
}

export { SiteContainer }
