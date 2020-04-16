import React from 'react'
import { node } from 'prop-types'

import theme from './index.module.scss'

/**
 * Use `VisuallyHidden` to hide content that you still want screen-readers to access
 */
const VisuallyHidden = ({ children }) => {
  if (!children) return null

  return <span className={theme.wrapper}>{children}</span>
}

VisuallyHidden.propTypes = {
  children: node
}

export default VisuallyHidden
export { VisuallyHidden }
