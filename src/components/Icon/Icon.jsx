import { node, number, object, oneOfType, shape, string } from 'prop-types'
import { Children, cloneElement } from 'react'

import { classNames } from '../../utils'

/**
 * Use `Icon` to wrap SVGs
 */
const Icon = ({
  width,
  height,
  alt,
  children,
  theme,
  className,
  style,
  ...rest
}) => {
  if (!children) return null

  return cloneElement(Children.only(children), {
    className: classNames(theme?.root, className),
    ...(alt && { role: 'img' }),
    ...(!alt && { 'aria-hidden': true }),
    style: { ...style, width, height },
    title: alt,
    ...rest
  })
}

Icon.displayName = 'Icon'
Icon.propTypes = {
  height: oneOfType([number, string]),
  width: oneOfType([number, string]),
  alt: string,
  children: node,
  theme: shape({ root: string }),
  className: string,
  style: object
}

export default Icon
