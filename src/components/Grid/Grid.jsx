import React from 'react'
import { arrayOf, bool, node, object, oneOf, string } from 'prop-types'
import classNames from 'classnames'

/**
 * `Grid` provides  a simple `inline-block` based responsive grid
 */
const Grid = ({ gutter, gutterless, reverse, valign, children, theme }) => {
  if (!children) return null

  return (
    <div
      className={classNames(
        theme?.wrapper,
        gutter && theme[gutter],
        gutterless && theme?.gutterless,
        reverse && theme?.reverse,
        valign && theme[`valign-${valign}`]
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
  valign: oneOf(['top', 'middle', 'bottom']),
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
  align: oneOf(['left', 'right', 'center']),
  sizes: arrayOf(string),
  children: node,
  theme: object
}

export { Grid, GridItem }
