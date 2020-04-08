import React from 'react'
import { node, shape, string } from 'prop-types'
import { Element } from '../Element'

const SiteContainer = ({ children, theme, ...rest }) => (
  <Element className={theme.wrapper} {...rest}>
    {children}
  </Element>
)

SiteContainer.propTypes = {
  children: node,
  theme: shape({ wrapper: string })
}

export { SiteContainer }
