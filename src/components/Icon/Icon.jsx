import React from 'react'
import { node, number, shape, string } from 'prop-types'
import classNames from 'classnames'
import VisuallyHidden from '../VisuallyHidden'

/**
 * Use `Icon` to wrap SVGs
 */
const Icon = ({ height, width, alt, children, theme }) => {
  if (!children) return null

  return (
    <span
      className={classNames(
        theme?.root,
        (width ?? height) && theme?.customSize
      )}
      {...(alt && {
        role: 'img',
        'aria-label': alt
      })}
      {...(!alt && {
        'aria-hidden': 'true'
      })}
      style={{
        width: width && `${width}px`,
        height: height && `${height}px`,
        lineHeight: height && `${height}px`
      }}
    >
      {alt && <VisuallyHidden>{alt}</VisuallyHidden>}
      {children}
    </span>
  )
}

Icon.displayName = 'Icon'
Icon.propTypes = {
  height: number,
  width: number,
  alt: string,
  children: node,
  theme: shape({ root: string })
}

export default Icon
