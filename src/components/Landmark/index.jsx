import React from 'react'
import { node, string } from 'prop-types'
import { VisuallyHidden } from '../VisuallyHidden'

import theme from './base.module.scss'

/**
 * Use `Landmark` to create visually hidden anchors
 */
const Landmark = ({ id, children }) => (
  <>
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <a id={id} className={theme.wrapper}>
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
    </a>
    {/* eslint-enable jsx-a11y/anchor-is-valid */}
  </>
)

Landmark.propTypes = {
  id: string,
  children: node
}

export default Landmark
export { Landmark }
