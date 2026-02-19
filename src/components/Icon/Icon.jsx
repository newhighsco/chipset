import { Icon as IconifyIcon } from '@iconify/react'
import { node, number, object, oneOfType, shape, string } from 'prop-types'
import React, { Children, cloneElement } from 'react'

import { classNames } from '../../utils'

/**
 * Use `Icon` to wrap SVGs
 */
const Icon = ({
  name,
  width,
  height = width,
  alt,
  children,
  theme,
  className,
  style,
  ...rest
}) => {
  if (!name && !children) return null

  const props = {
    'aria-hidden': alt ? null : true,
    'aria-label': alt,
    className: classNames(theme?.root, className),
    role: alt ? 'img' : null,
    style: { ...style, width, height },
    ...rest
  }

  if (children) {
    return cloneElement(Children.only(children), props)
  }

  return <IconifyIcon icon={name} fallback={<span {...props} />} {...props} />
}

Icon.displayName = 'Icon'
Icon.propTypes = {
  name: string,
  height: oneOfType([number, string]),
  width: oneOfType([number, string]),
  alt: string,
  children: node,
  theme: shape({ root: string }),
  className: string,
  style: object
}

export default Icon
