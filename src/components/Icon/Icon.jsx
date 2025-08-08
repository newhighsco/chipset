import { node, number, oneOfType, shape, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
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
Icon.propTypes = {
  height: oneOfType([number, string]),
  width: oneOfType([number, string]),
  alt: string,
  children: node,
  theme: shape({ root: string })
}

export default Icon
