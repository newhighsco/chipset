import React from 'react'
import { node } from 'prop-types'

import theme from './theme.module.scss'

const VisuallyHidden = ({ children }) => {
  if (!children) return null

  return <span className={theme.wrapper}>{children}</span>
}

VisuallyHidden.propTypes = {
  children: node
}

export default VisuallyHidden
export { VisuallyHidden }
