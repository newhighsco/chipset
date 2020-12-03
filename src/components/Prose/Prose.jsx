import React from 'react'
import { node, shape, string } from 'prop-types'
import classNames from 'classnames'

const Prose = ({ html, children, theme, className, ...rest }) => {
  if (!html && !children) return null

  return (
    <div
      className={classNames(theme?.root, className)}
      {...(html && { dangerouslySetInnerHTML: { __html: html } })}
      {...rest}
    >
      {children}
    </div>
  )
}

Prose.propTypes = {
  html: string,
  children: node,
  theme: shape({ root: string }),
  className: string
}

export default Prose
