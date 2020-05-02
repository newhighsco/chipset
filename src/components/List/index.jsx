import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import { Element } from '../Element'

import styles from './index.module.scss'

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
        styles.wrapper,
        unstyled && styles.unstyled,
        inline && styles.inline,
        commaSeparated && styles.commaSeparated,
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
