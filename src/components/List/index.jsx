import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import { Element } from '../Element'

import theme from './index.module.scss'

const List = ({
  as = 'ul',
  unstyled,
  inline,
  commaSeparated,
  children,
  className
}) => {
  if (!children) return null

  return (
    <Element
      as={as}
      className={classNames(
        theme.wrapper,
        unstyled && theme.unstyled,
        inline && theme.inline,
        commaSeparated && theme.commaSeparated,
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
  className: string
}

export default List
export { List }
