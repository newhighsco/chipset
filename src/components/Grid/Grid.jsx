import React from 'react'
import { arrayOf, bool, node, object, string } from 'prop-types'
import classNames from 'classnames'

/**
 * `Grid` provides  a simple `inline-block` based responsive grid
 */
const Grid = ({ gutter, gutterless, reverse, children, theme }) => {
  if (!children) return null

  return (
    <div
      className={classNames(
        theme?.wrapper,
        gutter && theme[gutter],
        gutterless && theme?.gutterless,
        reverse && theme?.reverse
      )}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  gutter: string,
  gutterless: bool,
  reverse: bool,
  children: node,
  theme: object
}

const GridItem = ({ sizes, children, theme, ...rest }) => {
  if (!children) return null

  return (
    <div
      className={classNames(
        theme?.item,
        sizes && sizes.map(size => theme[size])
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

GridItem.propTypes = {
  sizes: arrayOf(string),
  children: node,
  theme: object
}

export { Grid, GridItem }
