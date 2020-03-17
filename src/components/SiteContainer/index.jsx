import React from 'react'
import { node, object, string } from 'prop-types'
import classNames from 'classnames'
// import { themr } from '@friendsofreactjs/react-css-themr'

import { wrapper } from './SiteContainer.module.scss'

const SiteContainer = ({ theme = {}, className, children }) => (
  <div className={classNames(wrapper, className, theme.wrapper)}>
    {children}
  </div>
)

SiteContainer.propTypes = {
  theme: object,
  className: string,
  children: node
}

// const ThemedSiteContainer = themr('SiteContainer')(SiteContainer)

export { SiteContainer }
