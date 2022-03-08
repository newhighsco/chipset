import React, { FC } from 'react'
import classNames from 'classnames'
import Element from '../Element'
import { ContentContainerProps } from './ContentContainer.types'

/**
 * The `ContentContainer` constrains the width of an item within its parent
 */
const ContentContainer: FC<ContentContainerProps> = ({
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
        size && theme?.[size],
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

export default ContentContainer
