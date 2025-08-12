import { bool, node, shape, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
import Element from '../Element'

/**
 * The `ContentContainer` constrains the width of an item within its parent
 */
const ContentContainer = ({
  size,
  gutter,
  children,
  theme,
  className,
  ...rest
}) => {
  if (!children) return null

  return (
    <Element
      className={classNames(
        theme?.root,
        size && theme[size],
        gutter && theme?.gutter,
        className
      )}
      {...rest}
    >
      <div className={theme?.content}>{children}</div>
    </Element>
  )
}

ContentContainer.displayName = 'ContentContainer'
ContentContainer.propTypes = {
  size: string,
  gutter: bool,
  children: node,
  theme: shape({ root: string, size: string, gutter: string, content: string }),
  className: string
}

export default ContentContainer
