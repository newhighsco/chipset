import React from 'react'
import { bool, node, object } from 'prop-types'
import { Element } from '../Element'

const ContentContainer = ({ children, theme, ...rest }) => {
  if (!children) return null

  return (
    <Element className={theme.wrapper} {...rest}>
      <div className={theme.content}>{children}</div>
    </Element>
  )
}

ContentContainer.propTypes = {
  gutter: bool,
  children: node,
  theme: object
}

export { ContentContainer }
