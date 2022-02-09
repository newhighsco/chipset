import React, { FC } from 'react'
import classNames from 'classnames'
import Element from '../Element'
import { VisuallyHiddenProps } from './VisuallyHidden.types'
import styles from './VisuallyHidden.module.scss'

/**
 * Use `VisuallyHidden` to hide content that you still want screen-readers to access
 */
const VisuallyHidden: FC<VisuallyHiddenProps> = ({
  as = 'span',
  children,
  className,
  ...rest
}) => {
  if (!children) return null

  return (
    <Element as={as} className={classNames(styles.root, className)} {...rest}>
      {children}
    </Element>
  )
}

export default VisuallyHidden
