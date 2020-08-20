import React from 'react'
import { bool, node, object, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import { Element } from '../Element'

const List = ({
  as = 'ul',
  unstyled,
  inline,
  commaSeparated,
  children,
  theme,
  className
}) => {
  if (!children) return null

  return (
    <Element
      as={as}
      className={classNames(
        theme?.wrapper,
        unstyled && theme?.unstyled,
        inline && theme?.inline,
        commaSeparated && theme?.commaSeparated,
        className
      )}
    >
      {children}
    </Element>
  )
}

List.propTypes = {
  as: oneOf(['ol', 'ul']),
  unstyled: bool,
  inline: bool,
  commaSeparated: bool,
  children: node,
  theme: object,
  className: string
}

export { List }
