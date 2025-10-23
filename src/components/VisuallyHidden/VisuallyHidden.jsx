import { node } from 'prop-types'
import React from 'react'

import Element from '../Element'
import styles from './VisuallyHidden.module.scss'

/**
 * Use `VisuallyHidden` to hide content that you still want screen-readers to access
 */
const VisuallyHidden = ({ children, ...rest }) => {
  if (!children) return null

  return (
    <Element as="span" className={styles.root} {...rest}>
      {children}
    </Element>
  )
}

VisuallyHidden.propTypes = { children: node }

export default VisuallyHidden
