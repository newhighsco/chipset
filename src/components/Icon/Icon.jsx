import { node, number, oneOfType, shape, string } from 'prop-types'
import { Children, cloneElement } from 'react'

/**
 * Use `Icon` to wrap SVGs
 */
const Icon = ({ width, height, alt, children, theme, ...rest }) => {
  if (!children) return null

  return cloneElement(Children.only(children), {
    className: theme?.root,
    ...(alt && { role: 'img' }),
    ...(!alt && { 'aria-hidden': true }),
    style: { width, height },
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
  theme: shape({ root: string })
}

export default Icon
