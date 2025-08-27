import { node } from 'prop-types'
import React from 'react'

import VisuallyHidden from '../VisuallyHidden'
import styles from './Landmark.module.scss'

/**
 * Use `Landmark` to create visually hidden anchors
 */
const Landmark = ({ children, ...rest }) => (
  <a className={styles.root} {...rest}>
    <VisuallyHidden>{children}</VisuallyHidden>
  </a>
)

Landmark.propTypes = {
  children: node
}

export default Landmark
