import React from 'react'
import { func, node, object, oneOfType, string } from 'prop-types'
import { Element } from '../Element'

const SiteContainer = ({ is, children, theme, ...rest }) => (
  <Element is={is} className={theme.wrapper} {...rest}>
    {children}
  </Element>
)

SiteContainer.propTypes = {
  is: oneOfType([func, string]),
  children: node,
  theme: object
}

export { SiteContainer }
