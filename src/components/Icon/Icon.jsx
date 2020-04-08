import React from 'react'
import { node, number, shape, string } from 'prop-types'
import classNames from 'classnames'
import { VisuallyHidden } from '../VisuallyHidden'

const Icon = ({ height, width, a11yText, children, theme }) => {
  if (!children) return null

  return (
    <span
      className={classNames(
        theme.wrapper,
        (width || height) && theme.customSize
      )}
      {...(a11yText && {
        role: 'img',
        'aria-label': a11yText
      })}
      {...(!a11yText && {
        'aria-hidden': 'true'
      })}
      style={{
        width: width && `${width}px`,
        height: height && `${height}px`,
        lineHeight: height && `${height}px`
      }}
    >
      {a11yText && <VisuallyHidden>{a11yText}</VisuallyHidden>}
      {children}
    </span>
  )
}

Icon.propTypes = {
  height: number,
  width: number,
  a11yText: string,
  children: node,
  theme: shape({ wrapper: string, customSize: string })
}

export default Icon
export { Icon }
