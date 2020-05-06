import React from 'react'
import { arrayOf, bool, node, object, oneOf, string } from 'prop-types'
import classNames from 'classnames'

/**
 * `Grid` provides  a simple `inline-block` based responsive grid
 */
const Grid = ({
  gutter,
  gutterless,
  reverse,
  flex,
  valign,
  children,
  theme
}) => {
  if (!children) return null

  return (
    <div
      className={classNames(
        theme?.wrapper,
        gutter && theme[gutter],
        gutterless && theme?.gutterless,
        reverse && theme?.reverse,
        flex && theme?.flex,
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
  flex: bool,
  valign: oneOf(['top', 'middle', 'bottom']),
  children: node,
  theme: object
}

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
  theme: object,
  className: string
}

export { Grid, GridItem }
