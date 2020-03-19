import React from 'react'
import { bool, func, node, oneOfType, object, string } from 'prop-types'
import { Element } from '../Element'

const ContentContainer = ({ is, children, theme, ...rest }) => {
  if (!children) return null

  return (
    <Element is={is} className={theme.wrapper} {...rest}>
      <div className={theme.content}>{children}</div>
    </Element>
  )
}

ContentContainer.propTypes = {
  is: oneOfType([func, string]),
  gutter: bool,
  children: node,
  theme: object
}

export { ContentContainer }
