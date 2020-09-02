import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'
import Element from '../Element'

import styles from './Backdrop.module.scss'

/**
 * Use `Backdrop` to add full-width background to the viewport
 */
const Backdrop = ({ children, className, ...rest }) => {
  if (!children && !Object.keys(rest).length) return null

  return (
    <Element className={classNames(styles.wrapper, className)} {...rest}>
      {children}
    </Element>
  )
}

Backdrop.propTypes = {
  children: node,
  className: string
}

export default Backdrop
