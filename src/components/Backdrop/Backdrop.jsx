import { node, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
import Element from '../Element'
import styles from './Backdrop.module.scss'

/**
 * Use `Backdrop` to add full-width background to the viewport
 */
const Backdrop = ({ children, className, ...rest }) => {
  if (!children && !Object.keys(rest).length) return null

  return (
    <Element className={classNames(styles.root, className)} {...rest}>
      {children}
    </Element>
  )
}

Backdrop.displayName = 'Backdrop'
Backdrop.propTypes = {
  children: node,
  className: string
}

export default Backdrop
