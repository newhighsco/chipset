import classNames from 'classnames'
import { arrayOf, node, oneOf, oneOfType, shape, string } from 'prop-types'
import React from 'react'

const GridItem = ({ sizes, children, theme, className, ...rest }) => {
  if (!children) return null

  if (!Array.isArray(sizes)) sizes = [sizes]

  return (
    <div
      className={classNames(
        theme?.item,
        sizes && sizes.map(size => theme[size]),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

GridItem.propTypes = {
  align: oneOf(['left', 'right', 'center']),
  sizes: oneOfType([string, arrayOf(string)]),
  children: node,
  theme: shape({ item: string }),
  className: string
}

export default GridItem
