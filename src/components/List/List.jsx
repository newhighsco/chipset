import { bool, node, oneOf, shape, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
import Element from '../Element'

const List = ({
  as = 'ul',
  unstyled,
  inline,
  commaSeparated,
  children,
  theme,
  className,
  ...rest
}) => {
  if (!children) return null

  return (
    <Element
      as={as}
      className={classNames(
        theme?.root,
        unstyled && theme?.unstyled,
        inline && theme?.inline,
        commaSeparated && theme?.commaSeparated,
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
}

List.displayName = 'List'
List.propTypes = {
  as: oneOf(['ol', 'ul']),
  unstyled: bool,
  inline: bool,
  commaSeparated: bool,
  children: node,
  theme: shape({ root: string }),
  className: string
}

export default List
