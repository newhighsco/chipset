import React from 'react'
import { node } from 'prop-types'

import styles from './VisuallyHidden.module.scss'

/**
 * Use `VisuallyHidden` to hide content that you still want screen-readers to access
 */
const VisuallyHidden = ({ children }) => {
  if (!children) return null

  return <span className={styles.wrapper}>{children}</span>
}

VisuallyHidden.propTypes = {
  children: node
}

export { VisuallyHidden }
