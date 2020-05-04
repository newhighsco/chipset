import React from 'react'
import { bool, node, shape, string } from 'prop-types'
import classNames from 'classnames'
import { Element } from '../Element'

/**
 * The `ContentContainer` constrains the width of an item within its parent
 */
const ContentContainer = ({ size, gutter, children, theme, ...rest }) => {
  if (!children) return null

  return (
    <Element
      className={classNames(
        theme?.wrapper,
        size && theme[size],
        gutter && theme?.gutter
      )}
      {...rest}
    >
      <div className={theme?.content}>{children}</div>
    </Element>
  )
}

ContentContainer.propTypes = {
  size: string,
  gutter: bool,
  children: node,
  theme: shape({ wrapper: string, gutter: string })
}

export { ContentContainer }
