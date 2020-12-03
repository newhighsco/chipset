import React from 'react'
import { node } from 'prop-types'
import VisuallyHidden from '../VisuallyHidden'

import styles from './Landmark.module.scss'

/**
 * Use `Landmark` to create visually hidden anchors
 */
const Landmark = ({ children, ...rest }) => (
  <>
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <a className={styles.root} {...rest}>
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
    </a>
    {/* eslint-enable jsx-a11y/anchor-is-valid */}
  </>
)

Landmark.propTypes = {
  children: node
}

export default Landmark
