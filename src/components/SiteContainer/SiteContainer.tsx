import React, { FC } from 'react'
import classNames from 'classnames'
import Element from '../Element'
import { SiteContainerProps } from './SiteContainer.types'

/**
 * The `SiteContainer` stretches to fill the height of the viewport
 */
const SiteContainer: FC<SiteContainerProps> = ({
  children,
  theme,
  className,
  ...rest
}) => {
  if (!children) return null

  return (
    <Element className={classNames(theme?.root, className)} {...rest}>
      {children}
    </Element>
  )
}

SiteContainer.displayName = 'SiteContainer'

export default SiteContainer
