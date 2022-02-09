import React, { FC } from 'react'
import classNames from 'classnames'
import Element from '../Element'
import { BackdropProps } from './Backdrop.types'
import styles from './Backdrop.module.scss'

/**
 * Use `Backdrop` to add full-width background to the viewport
 */
const Backdrop: FC<BackdropProps> = ({ children, className, ...rest }) => {
  if (!children && !Object.keys(rest).length) return null

  return (
    <Element className={classNames(styles.root, className)} {...rest}>
      {children}
    </Element>
  )
}

Backdrop.displayName = 'Backdrop'

export default Backdrop
