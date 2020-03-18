import React from 'react'
import { node, object, string } from 'prop-types'
import classNames from 'classnames'

import { wrapper } from './ContentContainer.module.scss'

const ContentContainer = ({ children, className, theme = {} }) => {
  if (!children) return null

  return (
    <div className={classNames(wrapper, className, theme.wrapper)}>
      {children}
    </div>
  )
}

ContentContainer.propTypes = {
  children: node,
  className: string,
  theme: object
}

export { ContentContainer }
