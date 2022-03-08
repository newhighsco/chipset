import React, { FC } from 'react'
import classNames from 'classnames'
import Element from '../Element'
import { ListProps } from './List.types'

const List: FC<ListProps> = ({
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

export default List
