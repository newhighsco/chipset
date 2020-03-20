import React from 'react'
import { node, object } from 'prop-types'
import { Element } from '../Element'

const SiteContainer = ({ children, theme, ...rest }) => (
  <Element className={theme.wrapper} {...rest}>
    {children}
  </Element>
)

SiteContainer.propTypes = {
  children: node,
  theme: object
}

export { SiteContainer }
