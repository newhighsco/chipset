import React from 'react'
import { node, number, shape, string } from 'prop-types'
import { Element } from '../Element'

/**
 * The `SiteContainer` stretches to fill the height of the viewport
 */
const SiteContainer = ({ windowHeight, children, theme = {}, ...rest }) => {
  return (
    <Element
      className={theme.wrapper}
      {...(windowHeight && { style: { minHeight: windowHeight } })}
      {...rest}
    >
      {children}
    </Element>
  )
}

SiteContainer.propTypes = {
  windowHeight: number,
  children: node,
  theme: shape({ wrapper: string })
}

export { SiteContainer }
