import React from 'react'
import { bool, node, oneOf, shape, string } from 'prop-types'
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
  theme,
  className
}) => {
  if (!children) return null

  return (
    <div
      className={classNames(
        theme?.root,
        gutter && theme[gutter],
        gutterless && theme?.gutterless,
        reverse && theme?.reverse,
        flex && theme?.flex,
        valign && theme[`valign-${valign}`],
        className
      )}
    >
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'
Grid.propTypes = {
  gutter: string,
  gutterless: bool,
  reverse: bool,
  flex: bool,
  valign: oneOf(['top', 'middle', 'bottom']),
  children: node,
  theme: shape({ root: string }),
  className: string
}

export default Grid
