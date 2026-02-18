import { Icon as IconifyIcon } from '@iconify/react'
import { number, object, oneOfType, shape, string } from 'prop-types'
import React, { Children, cloneElement } from 'react'

import { useIcon } from '../../hooks'
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
  const icon = useIcon(name)

  if (!name && !children) return null

  const fallback = {
    className: classNames(theme?.root, className),
    style: { ...style, width, height }
  }
  const props = {
    ...fallback,
    'aria-hidden': alt ? null : true,
    'aria-label': alt,
    role: alt ? 'img' : null,
    ...rest
  }

  if (children) {
    return cloneElement(Children.only(children), props)
  }

  return (
    <IconifyIcon icon={icon} fallback={<span {...fallback} />} {...props} />
  )
}

Icon.displayName = 'Icon'
Icon.propTypes = {
  name: string,
  height: oneOfType([number, string]),
  width: oneOfType([number, string]),
  alt: string,
  theme: shape({ root: string }),
  className: string,
  style: object
}

export default Icon
