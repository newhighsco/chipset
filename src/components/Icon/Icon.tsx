import React, { FC } from 'react'
import classNames from 'classnames'
import VisuallyHidden from '../VisuallyHidden'
import { IconProps } from './Icon.types'

/**
 * Use `Icon` to wrap SVGs
 */
const Icon: FC<IconProps> = ({
  height,
  width,
  alt,
  children,
  theme,
  className
}) => {
  if (!children) return null

  return (
    <span
      className={classNames(
        theme?.root,
        (width ?? height) && theme?.customSize,
        className
      )}
      {...(alt && {
        role: 'img',
        'aria-label': alt
      })}
      {...(!alt && {
        'aria-hidden': 'true'
      })}
      style={{
        width,
        height,
        lineHeight: height
      }}
    >
      {alt && <VisuallyHidden>{alt}</VisuallyHidden>}
      {children}
    </span>
  )
}

Icon.displayName = 'Icon'

export default Icon
