import { node } from 'prop-types'
import React from 'react'

import ContentContainer from '../ContentContainer'

/**
 * The `PageContainer` flexes to fill the unused space within its parent
 */
const PageContainer = ({ header, footer, children, theme, ...rest }) => {
  return (
    <>
      {header}
      <ContentContainer
        as="main"
        id="content"
        role="main"
        theme={theme}
        {...rest}
      >
        {children}
      </ContentContainer>
      {footer}
    </>
  )
}

PageContainer.displayName = 'PageContainer'
PageContainer.propTypes = {
  header: node,
  footer: node,
  children: node,
  theme: ContentContainer.propTypes.theme
}

export default PageContainer
