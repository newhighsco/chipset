import React from 'react'
import { arrayOf, node, oneOf, shape, string } from 'prop-types'
import classNames from 'classnames'

const GridItem = ({ sizes, children, theme, className, ...rest }) => {
  if (!children) return null

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
  sizes: arrayOf(string),
  children: node,
  theme: shape({ item: string }),
  className: string
}

export default GridItem
